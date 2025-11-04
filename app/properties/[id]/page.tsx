"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiArrowFromRight, BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaBed, FaToilet } from "react-icons/fa";
import api from "@/services/api"; // <-- import your service

type DetailsProp = {
  id: number;
  propertyTitle: string;
  propertyType: string;
  price: string | number;
  location: string;
  description: string;
  bedrooms: string | number;
  bathrooms: string | number;
  image: string;
  agentName: string;
  agentNumber: string | number;
  agentEmail: string;
};

export default function Page() {
  const { id } = useParams();
  const [property, setProperty] = useState<DetailsProp | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await api.get(`properties/byId/${id}`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const getAgentInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <div className="max-w-[1920px] mx-auto bg-[#F9FAFB] px-[20px] py-[50px]">
      <Link href={"/properties"}>
        <span className="flex justify-between items-center w-[180px] font-bold mb-[30px]">
          <BiArrowFromRight />
          <p className="text-[16px]">Back to Properties</p>
        </span>
      </Link>

      <div className="w-[70%] h-[400px] border mx-auto">
        <img
          src={`${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
          }/uploads/${property.image}`}
          alt="house"
          className="w-[100%] h-[100%]"
        />
      </div>

      <div className="w-[70%] h-auto shadow-lg shadow-gray-500 py-[20px] px-[20px] mx-auto mt-[100px] bg-white flex justify-between items-center">
        <div className="w-[70%] px-[20px]">
          <div className="border-b border-gray-500">
            <p className="font-[700] text-[30px]">{property.propertyTitle}</p>
            <p className="text-[#2563EB] font-[700] text-[30px] my-[10px]">
              {property.price}
            </p>

            <div className="flex justify-between items-center w-[50%] my-[10px]">
              <span className="flex justify-between items-center w-[140px]">
                <FaBed className="w-[20px] h-[20px] text-gray-600" />
                <p className="font-[400] text-[18px]">{property.bedrooms}</p>
                <p className="font-[400] text-[18px]">Bedrooms</p>
              </span>

              <span className="flex justify-between items-center w-[140px]">
                <FaToilet className="w-[20px] h-[20px] text-gray-600" />
                <p className="font-[400] text-[18px]">{property.bathrooms}</p>
                <p className="font-[400] text-[18px]">Bathrooms</p>
              </span>
            </div>
          </div>

          <div className="border-green-900 mt-[30px]">
            <p className="font-[600] text-[20px]">Description</p>
            <p className="mt-[20px]">{property.description}</p>
          </div>
        </div>

        <div className="w-[30%] p-[10px] bg-[#f0f0f7] rounded-[5px]">
          <p className="font-[600] text-[20px]">Contact Agent</p>

          <div className="w-[70px] h-[70px] bg-[#2563EB] text-white font-bold rounded-full my-[20px] flex justify-center items-center">
            <h3 className="font-[600] text-[18px]">
              {getAgentInitial(property.agentName)}
            </h3>
          </div>

          <p className="font-[600] text-[18px]">{property.agentName}</p>

          <div className="mt-[20px]">
            <p className="flex justify-start items-center gap-x-[10px] text-[16px] font-[400] text-[#374151]">
              <BsTelephone /> {property.agentNumber}
            </p>
            <p className="flex justify-start items-center gap-x-[10px] text-[16px] font-[400] text-[#374151] mt-[10px]">
              <BiEnvelope /> {property.agentEmail}
            </p>
          </div>

          <button className="font-[500] text-[16px] border border-gray-500 w-[100%] p-[5px] rounded-[5px] mt-[20px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
