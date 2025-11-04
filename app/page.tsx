"use client";

import React, { useState } from "react";
import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-[1920px] mx-auto">
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Featured searchTerm={searchTerm} />
    </div>
  );
}
