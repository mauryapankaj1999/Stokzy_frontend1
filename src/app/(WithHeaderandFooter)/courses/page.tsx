"use client";
import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import CourseCard from "@/components/Course/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import React from "react";

export default function Courses() {
const {
    data,
    isLoading,
  } = useCourses();

  console.log(data);

  
  return (
    <>
      <Headingagebanner pagename="Our Courses" />
      <div className="my-10 text-center ">
        <h4 className="text-3xl font-bold mb-3">Learn. Build. Master.</h4>
        <p className="text-gray-500 mt-3 text-[16px] max-w-3xl mx-auto mb-4">
          Industry-grade courses designed by professionals. No fluff. Only
          results.
        </p>
        <div className="max-w-2xl mx-auto ">
          <div className="flex items-center bg-white border border-gray-200 rounded-3xl px-2 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full ml-4 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-2">
        <button className="px-5 py-2 rounded-full bg-primary text-white">
          All
        </button>

        <button className="px-5 py-2 rounded-full bg-white border">
          Stock Market
        </button>

        <button className="px-5 py-2 rounded-full bg-white border">
          Options
        </button>

        <button className="px-5 py-2 rounded-full bg-white border">
          Forex
        </button>
      </div>
      <CourseCard 
      courses={data?.data} 
      />
    </>
  );
}
