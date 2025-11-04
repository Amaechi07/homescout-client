"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import type { AxiosError } from "axios";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);

    const form = e.currentTarget;
    const full_name = (form.elements.namedItem("name") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      form.elements.namedItem("confirm-password") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("auth/signup", {
        full_name,
        email,
        password,
      });
      alert("Signup successful!");
      console.log(res);
      form.reset();
      router.push("/login");
    } catch (error) {
      const err = error as AxiosError<{
        message?: string;
        errors?: { msg: string }[];
      }>;

      if (err.response) {
        const data = err.response.data;
        if (data?.message) {
          setErrors(data.message);
        } else if (data?.errors) {
          setErrors(data.errors.map((e) => e.msg).join(", "));
        } else {
          setErrors("Signup failed. Please try again.");
        }
      } else {
        setErrors("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {errors && (
                <p className="text-red-500 text-sm text-center mb-2">
                  {errors}
                </p>
              )}
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      required
                    />
                  </Field>
                </div>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button
                  className="bg-[#2563EB]"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Account"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
