"use client";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import api from "@/services/api"; // ✅ using shared axios instance
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [propertyTitle, setPropertyTitle] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("Apartment");
  const [price, setPrice] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [image, setImage] = useState<FileList | null>(null);
  const [agentName, setAgentName] = useState<string>("");
  const [agentNumber, setAgentNumber] = useState<number>(0);
  const [agentEmail, setAgentEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const submitProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("propertyTitle", propertyTitle);
      formData.append("propertyType", propertyType);
      formData.append("price", price.toString());
      formData.append("location", location);
      formData.append("description", description);
      formData.append("bedrooms", bedrooms.toString());
      formData.append("bathrooms", bathrooms.toString());
      formData.append("agentName", agentName);
      formData.append("agentNumber", agentNumber.toString());
      formData.append("agentEmail", agentEmail);

      if (image && image[0]) {
        formData.append("image", image[0]);
      }

      // ✅ Using the shared Axios instance
      const response = await api.post("/properties", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Property added successfully!");

      console.log("Response:", response.data);

      // Optionally reset form
      setPropertyTitle("");
      setPropertyType("Apartment");
      setPrice(0);
      setLocation("");
      setDescription("");
      setBedrooms(0);
      setBathrooms(0);
      setImage(null);
      setAgentName("");
      setAgentNumber(0);
      setAgentEmail("");
    } catch (error) {
      console.error("Error adding property:", error);
      setMessage("❌ Failed to add property. Please try again.");
    } finally {
      setLoading(false);
      router.push("/properties");
    }
  };

  return (
    <div className="bg-[#F9FAFB] max-w-[1920px] mx-auto py-[50px]">
      <div className="w-[70%] mx-auto rounded-[20px] bg-white p-[20px] shadow-lg shadow-gray-500">
        <p className="font-[700] text-[30px]">Add New Property Listing</p>

        <form className="mt-[20px]" onSubmit={submitProperty}>
          <p className="font-[600] text-[20px]">Basic Information</p>

          <div className="flex justify-between flex-wrap items-center">
            <span className="w-[49%] mt-[10px] flex flex-col gap-y-2">
              <label className="font-[500] text-[14px]">Property Title</label>
              <input
                required
                onChange={(e) => setPropertyTitle(e.target.value)}
                value={propertyTitle}
                type="text"
                className="border border-gray-500 p-[5px] rounded-[5px]"
              />
            </span>
            <span className="w-[49%] mt-[10px] flex flex-col gap-y-2">
              <label className="font-[500] text-[14px]">Property Type</label>
              <select
                required
                onChange={(e) => setPropertyType(e.target.value)}
                value={propertyType}
                className="p-[5px] border border-gray-500 rounded-[5px]"
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Duplex">Duplex</option>
                <option value="Bungalow">Bungalow</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
              </select>
            </span>

            <span className="w-[49%] mt-[10px] flex flex-col gap-y-2">
              <label className="font-[500] text-[14px]">Price</label>
              <input
                required
                onChange={(e) => setPrice(Number(e.target.value))}
                value={price || ""}
                type="number"
                min={0}
                className="border border-gray-500 p-[5px] rounded-[5px]"
              />
            </span>

            <span className="w-[49%] mt-[10px] flex flex-col gap-y-2">
              <label className="font-[500] text-[14px]">Location</label>
              <input
                required
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                type="text"
                className="border border-gray-500 p-[5px] rounded-[5px]"
              />
            </span>
          </div>

          <div className="mt-[20px] flex flex-col gap-y-3">
            <label className="font-[500] text-[14px]">Description</label>
            <textarea
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="border border-gray-500 h-[200px] rounded-[5px] p-[10px]"
            ></textarea>
          </div>

          <div className="mt-[20px]">
            <p className="font-[500] text-[14px]">Property Details</p>
            <div className="w-[80%] flex justify-between items-center mt-[10px]">
              <span className="w-[49%] flex flex-col mt-[10px]">
                <label className="font-[500] text-[14px]">Bedroom(s)</label>
                <input
                  required
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  value={bedrooms || ""}
                  type="number"
                  min={0}
                  className="border border-gray-500 p-[5px] rounded-[5px] mt-[5px]"
                />
              </span>
              <span className="w-[49%] flex flex-col mt-[10px]">
                <label className="font-[500] text-[14px]">Bathroom(s)</label>
                <input
                  required
                  onChange={(e) => setBathrooms(Number(e.target.value))}
                  value={bathrooms || ""}
                  type="number"
                  min={0}
                  className="border border-gray-500 p-[5px] rounded-[5px] mt-[5px]"
                />
              </span>
            </div>
          </div>

          <div className="mt-[20px]">
            <p className="font-[500] text-[14px]">Property Images</p>
            <ImageUpload image={image} setImage={setImage} />
          </div>

          <div className="mt-[20px]">
            <p className="font-[500] text-[14px]">Contact Information</p>
            <div className="mt-[10px] flex justify-between items-center">
              <span className="w-[30%] flex flex-col">
                <label className="font-[500] text-[14px]">Name</label>
                <input
                  onChange={(e) => setAgentName(e.target.value)}
                  value={agentName}
                  type="text"
                  className="border border-gray-500 p-[5px] rounded-[5px] mt-[5px]"
                />
              </span>
              <span className="w-[30%] flex flex-col">
                <label className="font-[500] text-[14px]">Phone Number</label>
                <input
                  onChange={(e) => setAgentNumber(Number(e.target.value))}
                  value={agentNumber || ""}
                  type="number"
                  className="border border-gray-500 p-[5px] rounded-[5px] mt-[5px]"
                />
              </span>
              <span className="w-[30%] flex flex-col">
                <label className="font-[500] text-[14px]">Email</label>
                <input
                  onChange={(e) => setAgentEmail(e.target.value)}
                  value={agentEmail}
                  type="email"
                  className="border border-gray-500 p-[5px] rounded-[5px] mt-[5px]"
                />
              </span>
            </div>
          </div>

          <div className="flex justify-end items-center mt-[30px]">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-[#2563EB]"
              } text-[16px] font-[500] text-white px-[30px] py-[10px] rounded-[10px]`}
            >
              {loading ? "Submitting..." : "Submit Listing"}
            </button>
          </div>
        </form>

        {message && (
          <p className="text-center mt-4 text-[16px] font-[500] text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
