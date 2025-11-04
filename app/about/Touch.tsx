import Link from "next/link";
import React from "react";

export default function Touch() {
  return (
    <div className="bg-[#F3F4F6] py-[30px]">
      <div className=" flex flex-col  items-center justify-between gap-y-[20px] w-[70%] mx-auto">
        <h3 className="font-[700] text-[30px]"> Get in Touch </h3>
        <p className="font-[400] text-[16px]">
          Have questions about our platform or want to partner with us?
          We&quot;d love to hear from you.
        </p>
        <Link href={"/contactPage"}>
          <button className="font-[500] text-[16px] text-[white] bg-[#2563EB] px-[20px] py-[10px] rounded-[5px] cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
