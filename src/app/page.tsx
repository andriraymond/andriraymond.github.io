"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 w-full h-full">
      <h3 className="text-[40px] md:text-[55px] font-semibold text-[#252525] leading-tight">
        Andri Reimondo Tamba
      </h3>

      <span className="inline-block h-1 w-16 bg-[#252525]"></span>
      
      <h1 className="text-[18px] md:text-[22px] font-normal tracking-wide">
        <span className="mr-2">I am a</span>
        <span className="font-semibold text-[#252525]">
          <Typewriter
            words={[
              "Technology Enthusiast",
              "Quality Assurance",
              "Writer",
              "Freelancer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </span>
      </h1>

      <Link
        href="/assets/pdf/CV-Andri Reimondo Tamba-2025.pdf"
        target="_blank"
        download
        // className="inline-block borders-4 borders-[#252525] text-[#252525] hover:bg-[#252525] hover:text-white transition-colors duration-300 px-7 py-2 text-[16px] font-semibold text-center rounded-md max-width-300"
        className="inline-block border-3 border-[#252525] text-[#252525] hover:bg-[#252525] hover:text-white transition-colors duration-300 px-7 py-2 text-[16px] font-semibold text-center rounded-md max-w-[300px]"

      >
        Download My Resume
      </Link>
</div>
)}