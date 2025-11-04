import React from "react";

const hand = "/images/hand.jpg";

export default function OurStory() {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#FFFFFF] py-[100px]">
      <div className="w-[70%] mx-auto  flex justify-between items-start">
        <div className="w-[50%] flex flex-col justify-start items-start gap-y-[10px]">
          <h4 className="font-[700] text-[30px]">Our Story</h4>
          <p className="font-[400] text-[16px]">
            PropertyFinder was born out of frustration with the traditional
            house-hunting process. Our founders experienced firsthand the
            exhausting and time-consuming task of driving through neighborhoods,
            hoping to spot &quot;For Rent&quot; signs. <br /> <br /> We realized
            there had to be a better way. In today&apos;s digital age, why
            should finding a home be so analog and inefficient? That's when we
            decided to create a platform that would centralize property listings
            and make the search process intuitive and comprehensive.
          </p>
        </div>
        <div className="w-[50%] flex justify-center items-center gap-y-[10px]">
          <img
            className="rounded-[20px]"
            src={hand}
            alt="modern apartment for rent luxury house exterior"
          />
        </div>
      </div>
    </div>
  );
}
