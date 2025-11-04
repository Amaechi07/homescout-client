import React from "react";
import ContactForm from "./ContactForm";
import { IoLocation } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";

export default function page() {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#F9FAFB]">
      <div className="w-[100%] h-[auto] py-[40px] bg-[#2563EB] ">
        <h3 className="m-0 text-center text-white font-[700] text-[36px]">
          Get in Touch
        </h3>

        <h3 className="text-white text-center font-[400] text-[20px] m-0">
          We&quot;re here to help you with any questions or concerns
        </h3>
      </div>

      <div
        className=" h-[auto] w-[80%] mx-auto  
      flex justify-between items-start mt-[50px]"
      >
        <div className="w-[48%] shadow-md shadow-gray-600  p-[20px] bg-[white] rounded-[10px] ">
          <ContactForm />
        </div>

        {/* CONTACT INFO */}

        <div className="w-[48%]  h-[auto] ">
          <div className="bg-[white] py-[20px] px-[20px] rounded-[10px] shadow-md shadow-gray-600 flex flex-col gap-y-[20px]">
            <p className="font-[700] text-[24px] mb-[20px] ">
              Contact Information
            </p>

            <div className="flex  justify-between items-start w-[450px]">
              <span className="p-3  flex justify-center items-center bg-[#DBEAFE] rounded-[10px]">
                <IoLocation className="w-[20px] h-[20px] text-[#2563EB]" />
              </span>
              <span className=" w-[85%]">
                <p className="font-[600] text-[16px]">Address</p>
                <p className="font-[400] text-[16px] w-[50%]">
                  123 Property Street Suite 100 New York, NY 10001
                </p>
              </span>
            </div>

            <div className="flex  justify-between items-start w-[450px]">
              <span className="p-3  flex justify-center items-center bg-[#DBEAFE] rounded-[10px]">
                <BsTelephone className="w-[20px] h-[20px] text-[#2563EB]" />
              </span>
              <span className=" w-[85%]">
                <p className="font-[600] text-[16px]">Phone</p>

                <p> +1 (555) 000-0000</p>
                <p className="m-0 w-[100%]"> Toll-free: +1 (800) 123-4567</p>
              </span>
            </div>

            <div className="flex  justify-between items-start w-[450px]">
              <span className="p-3  flex justify-center items-center bg-[#DBEAFE] rounded-[10px]">
                <MdEmail className="w-[20px] h-[20px] text-[#2563EB]" />
              </span>
              <span className=" w-[85%]">
                <p className="font-[600] text-[16px]">Email</p>

                <p> badmususman50@gmail.com</p>
              </span>
            </div>

            <div className="flex  justify-between items-start w-[450px]">
              <span className="p-3  flex justify-center items-center bg-[#DBEAFE] rounded-[10px]">
                <CgLock className="w-[20px] h-[20px] text-[#2563EB]" />
              </span>
              <span className=" w-[85%]">
                <p className="font-[600] text-[16px]">Business Hours</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p> Saturday: 10:00 AM - 4:00 PM</p>
                <p className="font-[400] text-[16px] w-[50%]">Sunday: Closed</p>
              </span>
            </div>
          </div>

          <div className=" h-[300px] mt-[40px] shadow-md shadow-gray-600 rounded-[10px] p-[20px] bg-[white]">
            <p className="font-[700] text-[24px] text-[#1f2937]">
              Quick Answers
            </p>

            <div className="mt-[20px]">
              <p className="font-[600] text-[16px] text-[#1f2937]">
                How do I list my property?
              </p>
              <p className="font-[400] text-[14px] text-[#4b5563]">
                Click on &quot;Add Listing&quot; in the navigation menu and fill
                out the property details form
              </p>
            </div>

            <div className="mt-[20px]">
              <p className="font-[600] text-[16px] text-[#1f2937]">
                How do I contact property owners?
              </p>
              <p className="font-[400] text-[14px] text-[#4b5563]">
                Click on any property to view contact details and send a message
                directly to the owner or agent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
