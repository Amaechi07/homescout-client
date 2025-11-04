"use client";
import styles from "./Hero.module.css";

type HeroProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div
        className={`${styles.bg} w-[100%] h-[100vh] flex justify-center items-center`}
      >
        <div className="w-[50%] h-[auto] mx-auto bg-[white] rounded-[10px] p-10 ">
          <h1 className="text-center font-[700] text-[48px] m-0 text-[#2563EB]">
            Find Your Perfect Home
          </h1>
          <p className="text-center text-[20px] font-[400]">
            Discover amazing properties without the stress of street searching
          </p>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border w-[100%] mt-[30px] p-[20px] rounded-[10px]"
            placeholder="Search by property type or description..."
          />

          <div className="flex justify-center items-center mt-10">
            <button className="text-white p-5 rounded-[10px] font-[500] text-[16px] bg-[#2563EB]">
              VIEW ALL PROPERTIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
