"use client";

import React, { useState } from "react";
import PropertiesList from "./PropertiesList";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-[1920px] mx-auto bg-[#F9FAFB]">
      <div className="border-b border-[gray] py-10">
        <div className="w-[50%] mx-auto">
          <input
            type="text"
            className="p-[10px] bg-[#F9FAFB] w-[100%] text-[16px] border border-[gray] font-[400] px-10 rounded-2xl outline-0"
            placeholder="Search by property type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // update state
          />
        </div>
      </div>

      <div className="mt-[40px]">
        <p className="font-[700] text-[24px] ml-[20px]">Available Properties</p>

        {/* Pass search term to child */}
        <PropertiesList searchTerm={searchTerm} />
      </div>
    </div>
  );
}
