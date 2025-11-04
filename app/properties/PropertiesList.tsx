"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaToilet } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import api from "@/services/api";

type Property = {
  id: string | number;
  image?: string;
  description?: string;
  price?: number;
  bedrooms?: string;
  bathrooms?: string;
  agentName?: string;
  agentNumber?: number;
  agentEmail?: string;
  propertyType?: string;
};

export default function PropertiesList({ searchTerm }: { searchTerm: string }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get("/properties");
        setProperties(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = properties.filter((p) =>
      p.propertyType?.toLowerCase().includes(term)
    );
    setFiltered(results);
  }, [searchTerm, properties]);

  return (
    <div className="container mx-auto px-[20px] flex justify-center gap-x-[30px] flex-wrap space-y-[50px] mt-[30px]">
      {filtered.length > 0 ? (
        filtered.map((property) => (
          <div
            key={property.id}
            className="shadow-lg shadow-gray-600 w-[350px] h-[370px] rounded-[10px] overflow-hidden bg-[white]"
          >
            <div className="h-[50%]">
              <img
                src={
                  property.image
                    ? `${process.env.NEXT_PUBLIC_API_URL}uploads/${property.image}`
                    : ""
                }
                alt="house image"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="p-5">
              <p className="font-[600] text-[18px] text-[#1f2937]">
                {property.description}
              </p>

              <div className="w-[40%] flex justify-between items-center mt-[20px]">
                <span className="flex items-center gap-1 text-[#343435]">
                  <FaBed /> {property.bedrooms}
                </span>
                <span className="flex items-center gap-1 text-[#343435]">
                  <FaToilet /> {property.bathrooms}
                </span>
              </div>

              <Link href={`/properties/${property.id}`}>
                <button className="bg-[#1D4ED8] font-bold text-[16px] text-white w-[100%] p-3 rounded-[10px] mt-[22px] cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full mt-10">
          No properties found.
        </p>
      )}
    </div>
  );
}
