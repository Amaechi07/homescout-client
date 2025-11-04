"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="w-[100%] h-[100%]  ">
      <p className="font-[700] text-[24px] mb-[20px]">Send us a Message</p>

      <form className=" ">
        <div className="  w-[100%] flex justify-between items-center mb-[20px]">
          <span className="  w-[46%] h-[auto] flex flex-col justify-between">
            <label className="text-[14px] font-[500]">Name</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
              type="text"
              className="border-1 border-[#b1b2b4] p-3 rounded-[5px] mt-[10px]"
            />
          </span>

          <span className="  w-[46%] h-[auto] flex flex-col justify-between">
            <label className="text-[14px] font-[500]">Email</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
              type="text"
              className="border-1 border-[#b1b2b4] p-3 rounded-[5px] mt-[10px]"
            />
          </span>
        </div>

        <label className="text-[14px] font-[500]">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className=" border-1 border-[#b1b2b4] mt-[10px] rounded-[5px] w-[100%] h-[200px]"
        ></textarea>

        <button className=" mt-[20px] w-[100%] bg-[#2563EB] p-3 rounded-[5px] text-[white] font-[500] text-[16px]">
          Send Message
        </button>
      </form>
    </div>
  );
}
