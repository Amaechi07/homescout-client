import React from "react";
import OurStory from "./OurStory";
import Touch from "./Touch";

const mission = "/images/mission.svg";
const vission = "/images/vission.svg";
const values = "/images/values.svg";

export default function page() {
  return (
    <div className="max-w-[1920px]  mx-auto ">
      <div className="bg-[#2563EB] ">
        <div className="w-[50%] mx-auto  text-center py-[50px]">
          <h3 className="text-[white] text-[48px] font-[700] m-0">
            About HomeScout
          </h3>

          <h4 className="font-[400] text-white text-[20px] m-0">
            We&quot;re on a mission to revolutionize how people find their
            perfect home by eliminating the stress of street-by-street searching
            and creating a seamless, digital-first experience.
          </h4>
        </div>
      </div>

      <div className="bg-[#F9FAFB] pt-[40px] pb-[100px]">
        <div className="w-[60%]  mx-auto text-center flex justify-between items-center ">
          <div className="w-[30%]  flex flex-col justify-center items-center gap-y-[20px] p-2 ">
            <div className="w-[70px] h-[70px] bg-[#DBEAFE] rounded-full flex justify-center items-center">
              {" "}
              <img className="color" src={mission} alt="" />{" "}
            </div>
            <p className="font-[600] text-[20px]">Our Mission</p>{" "}
            <p className="font-[400] text-[16px]">
              To make house hunting stress-free and efficient by connecting
              renters with quality properties through our innovative platform.
            </p>
          </div>
          <div className="w-[30%]  flex flex-col justify-center items-center gap-y-[20px] p-2 ">
            <div className="w-[70px] h-[70px] bg-[#DBEAFE] rounded-full flex justify-center items-center">
              <img className="color" src={vission} alt="" />
            </div>
            <p className="font-[600] text-[20px]">Our Vision</p>
            <p className="font-[400] text-[16px]">
              To become the leading platform where finding your next home is as
              easy as a few clicks, saving time and reducing stress for
              everyone.
            </p>
          </div>
          <div className="w-[30%]  flex flex-col justify-center items-center gap-y-[20px] p-2 ">
            <div className="w-[70px] h-[70px] bg-[#DBEAFE] rounded-full flex justify-center items-center">
              <img className="color" src={values} alt="" />
            </div>
            <p className="font-[600] text-[20px]">Our Values</p>
            <p className="font-[400] text-[16px]">
              Transparency, reliability, and user-centric design drive
              everything we do to ensure the best experience for our users.
            </p>
          </div>
        </div>
      </div>

      <>
        <OurStory />
      </>

      <>
        <Touch />
      </>
    </div>
  );
}
