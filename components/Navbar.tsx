"use client";
import { useUser } from "@/context/user-context";

import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BadgeDollarSign, Handshake, LogOut, User2 } from "lucide-react";
import { SignupForm } from "@/components/signup-form";
import { LoginForm } from "./login-form";

export default function Navbar() {
  const { user, logout } = useUser();

  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <div className="max-w-[1920px] mx-auto ">
      <div className="flex justify-between items-center  w-[100%] px-20 py-3">
        <div className="w-[20%]  flex justify-center items-center">
          <Link href={"/"}>
            <span className="font-bold text-[30px] text-[#2563EB]">
              HomeScout
            </span>
          </Link>
        </div>
        <div className="w-[40%]  flex justify-between items-center ">
          <Link href={"/"}>
            <span>Home</span>
          </Link>

          <Link href={"/properties"}>
            <span>Properties</span>
          </Link>

          <Link href={"/listing"}>
            <span>Add Listing</span>
          </Link>

          {/* <span>Dashboard</span> */}

          <Link href={"/about"}>
            <span>About</span>
          </Link>

          <Link href={"contactPage"}>
            <span>Contact</span>
          </Link>
          {/* <span className="flex  w-[15%] items-center">
            <BsTelephone /> +234 9033 414 253
          </span> */}
        </div>

        <div className="flex items-center gap-[10px]">
          {!user && (
            <button className="px-[15px] py-[10px] rounded-[10px] bg-[#2563EB] text-white font-semibold">
              <Link href={"/signup"}> Register</Link>
            </button>
          )}

          {/* <button
            onClick={() => setOpenLogin(true)}
            className="px-[15px] py-[10px] rounded-[10px] bg-white border border-[#2563EB] text-[#2563EB] font-semibold"
          >
            Login
          </button> */}

          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    {getInitials(user.full_name)}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[250px] mr-5">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User2 /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BadgeDollarSign /> Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    <Handshake />
                    Team
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <a href="/login" className="text-blue-600">
              Login
            </a>
          )}
        </div>
      </div>

      <Dialog open={openRegister} onOpenChange={setOpenRegister}>
        <div className=" overflow-hidden">
          <DialogContent className="space-y-[40px]  max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create Your Account</DialogTitle>
            </DialogHeader>

            <div className="flex w-full max-w-sm flex-col gap-6 mx-auto">
              <SignupForm />
            </div>
          </DialogContent>
        </div>
      </Dialog>

      <Dialog open={openLogin} onOpenChange={setOpenLogin}>
        <DialogContent className="space-y-[30px]">
          <DialogHeader>
            <DialogTitle>Login In Using Your Email and Password</DialogTitle>
          </DialogHeader>

          <LoginForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
