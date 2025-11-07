import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <div
      className={`${styles.footerContainer}max-w-[1920px] mx-auto bg-[#1F2937] py-[50px] text-white mt-[50px]`}
    >
      <div className="w-[80%] mx-auto  flex justify-between items-start">
        <div className=" w-[20%] h-auto">
          <h3 className="font-[700] text-[20px]">HomeScout</h3>
          <ul className="mt-[20px] font-[400] text-[16px] flex flex-col gap-y-[10px] text-[#9ca3af]">
            <li>
              Making house hunting stress-free and convenient for everyone.
            </li>
          </ul>
        </div>
        <div className=" w-[20%] h-auto">
          <h3 className="font-[700] text-[16px]">Quick Links</h3>

          <ul className="mt-[20px] font-[400] text-[16px] flex flex-col gap-y-[10px] text-[#9ca3af]">
            <Link href={"/properties"}>
              <li>Browse Properties</li>
            </Link>

            <Link href={"/listing"}>
              <li>List Property</li>
            </Link>

            <Link href={"/about"}>
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        <div className=" w-[20%] h-auto">
          <h3 className="font-[700] text-[16px]">Support</h3>

          <ul className="mt-[20px] font-[400] text-[16px] flex flex-col gap-y-[10px] text-[#9ca3af]">
            <Link href={"/about"}>
              <li> Help Center</li>
            </Link>

            <Link href={"/contactPage"}>
              <li>Contact Us</li>
            </Link>

            <Link href={"/about"}>
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className=" w-[20%] h-auto">
          <h3 className="font-[700] text-[16px]">Contact</h3>
          <ul className="mt-[20px] font-[400] text-[16px] flex flex-col gap-y-[10px] text-[#9ca3af]">
            <li className="flex  items-center gap-x-[5px] ">
              <BsTelephone /> +1 (555) 000-0000
            </li>
            <li className="flex  items-center gap-x-[5px] ">
              <BiEnvelope /> info@propertyfinder.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
