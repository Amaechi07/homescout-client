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

import {
  BadgeDollarSign,
  Handshake,
  LogOut,
  User2,
  Menu,
  X,
} from "lucide-react";
import { SignupForm } from "@/components/signup-form";
import { LoginForm } from "./login-form";

export default function Navbar() {
  const { user, logout } = useUser();

  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="flex justify-between items-center w-[100%] px-20 py-3 max-[768px]:px-8 max-[425px]:px-4 max-[375px]:px-3 max-[320px]:px-2">
        {/* Logo */}
        <div className="w-[20%] flex justify-center items-center max-[768px]:w-auto max-[768px]:justify-start">
          <Link href={"/"}>
            <span className="font-bold text-[30px] text-[#2563EB] max-[768px]:text-[24px] max-[425px]:text-[20px] max-[375px]:text-[18px] max-[320px]:text-[16px]">
              HomeScout
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="w-[40%] flex justify-between items-center max-[768px]:hidden text-[12px]">
          <Link href={"/"}>
            <span>Home</span>
          </Link>

          <Link href={"/properties"}>
            <span>Properties</span>
          </Link>

          <Link href={"/listing"}>
            <span>Add Listing</span>
          </Link>

          <Link href={"/about"}>
            <span>About</span>
          </Link>

          <Link href={"contactPage"}>
            <span>Contact</span>
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="flex items-center gap-[10px] max-[768px]:hidden">
          {!user && (
            <button className="px-[15px] py-[10px] rounded-[10px] bg-[#2563EB] text-white font-semibold">
              <Link href={"/signup"}> Register</Link>
            </button>
          )}

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

        {/* Mobile Menu Button and User Avatar */}
        <div className="hidden max-[768px]:flex items-center gap-3">
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center max-[425px]:w-8 max-[425px]:h-8 max-[375px]:w-7 max-[375px]:h-7 max-[320px]:text-xs">
                  {getInitials(user.full_name)}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[250px] mr-5 max-[425px]:min-w-[200px]">
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
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#2563EB] p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="hidden max-[768px]:block bg-white border-t border-gray-200 px-8 py-4 max-[425px]:px-4 max-[375px]:px-3 max-[320px]:px-2">
          <div className="flex flex-col gap-4">
            <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
              <span className="block py-2 text-gray-700 hover:text-[#2563EB]">
                Home
              </span>
            </Link>

            <Link href={"/properties"} onClick={() => setMobileMenuOpen(false)}>
              <span className="block py-2 text-gray-700 hover:text-[#2563EB]">
                Properties
              </span>
            </Link>

            <Link href={"/listing"} onClick={() => setMobileMenuOpen(false)}>
              <span className="block py-2 text-gray-700 hover:text-[#2563EB]">
                Add Listing
              </span>
            </Link>

            <Link href={"/about"} onClick={() => setMobileMenuOpen(false)}>
              <span className="block py-2 text-gray-700 hover:text-[#2563EB]">
                About
              </span>
            </Link>

            <Link href={"contactPage"} onClick={() => setMobileMenuOpen(false)}>
              <span className="block py-2 text-gray-700 hover:text-[#2563EB]">
                Contact
              </span>
            </Link>

            <div className="border-t border-gray-200 pt-4 mt-2">
              {!user ? (
                <div className="flex flex-col gap-3">
                  <Link
                    href={"/signup"}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="w-full px-[15px] py-[10px] rounded-[10px] bg-[#2563EB] text-white font-semibold">
                      Register
                    </button>
                  </Link>
                  <Link
                    href={"/login"}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="w-full px-[15px] py-[10px] rounded-[10px] bg-white border border-[#2563EB] text-[#2563EB] font-semibold">
                      Login
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-[15px] py-[10px] rounded-[10px] bg-red-500 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <LogOut size={18} /> Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Dialog open={openRegister} onOpenChange={setOpenRegister}>
        <div className="overflow-hidden">
          <DialogContent className="space-y-[40px] max-h-[90vh] overflow-y-auto max-[425px]:max-w-[90vw] max-[375px]:max-w-[95vw] max-[320px]:max-w-[98vw] max-[425px]:space-y-[20px]">
            <DialogHeader>
              <DialogTitle className="max-[425px]:text-base max-[375px]:text-sm">
                Create Your Account
              </DialogTitle>
            </DialogHeader>

            <div className="flex w-full max-w-sm flex-col gap-6 mx-auto">
              <SignupForm />
            </div>
          </DialogContent>
        </div>
      </Dialog>

      <Dialog open={openLogin} onOpenChange={setOpenLogin}>
        <DialogContent className="space-y-[30px] max-[425px]:max-w-[90vw] max-[375px]:max-w-[95vw] max-[320px]:max-w-[98vw] max-[425px]:space-y-[15px]">
          <DialogHeader>
            <DialogTitle className="max-[425px]:text-base max-[375px]:text-sm">
              Login In Using Your Email and Password
            </DialogTitle>
          </DialogHeader>

          <LoginForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
