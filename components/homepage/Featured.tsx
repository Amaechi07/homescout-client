"use client";

import React, { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import { FaBed, FaToilet } from "react-icons/fa";

type Property = {
  id: string | number;
  image?: string;
  description?: string;
  propertyType?: string;
  price?: number;
  bedrooms?: string;
  bathrooms?: string;
  agentName?: string;
  agentNumber?: number;
  agentEmail?: string;
};

type FeaturedProps = {
  searchTerm: string;
};

export default function Featured({ searchTerm }: FeaturedProps) {
  const [featured, setFeatured] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await api.get("/properties");
        setFeatured(res.data);
      } catch (err) {
        console.error("Error fetching featured properties:", err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    }

    fetchFeatured();
  }, []);

  const filteredProperties = featured.filter((p) => {
    if (!searchTerm) return true;
    const lower = searchTerm.toLowerCase();
    return (
      p.description?.toLowerCase().includes(lower) ||
      p.propertyType?.toLowerCase().includes(lower)
    );
  });

  if (loading)
    return <p className="text-center py-8">Loading featured properties...</p>;
  if (error) return <p className="text-center text-red-500 py-8">{error}</p>;

  return (
    <div className="mx-auto px-[40px]">
      <p className="font-[700] text-[48px] text-center">Featured Properties</p>
      <p className="font-[400] text-[20px] text-center">
        Handpicked premium properties that offer exceptional value, prime
        locations, and outstanding amenities
      </p>

      <div className="mx-auto flex justify-start scrollbar-hide px-[100px]  py-[20px] items-center  mt-8 overflow-x-scroll gap-[20px]">
        {filteredProperties.length > 0 ? (
          filteredProperties.slice(0, 5).map((property) => (
            <div
              key={property.id}
              className="shadow-lg shadow-gray-600 min-w-[350px] h-[370px] rounded-[10px] bg-[white]"
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
                  <span className="flex items-center font-[400] text-[16px] text-[#343435] gap-1">
                    <FaBed /> {property.bedrooms}
                  </span>
                  <span className="flex items-center font-[400] text-[16px] text-[#343435] gap-1">
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
          <p className="text-center text-gray-500 w-full py-8">
            No properties match your search.
          </p>
        )}
      </div>
    </div>
  );
}
