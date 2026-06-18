"use client";
import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import CourseCard from "@/components/Course/CourseCard";
import { useCategories } from "@/hooks/useCategories";
import { useCourses } from "@/hooks/useCourses";
import React, { useState } from "react";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, isLoading, isFetching } = useCourses(selectedCategory);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const { data: categories } = useCategories();
  console.log(data);
  console.log(selectedCategory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full ml-4 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-lg"
            />
            {/* <input
                type="text"
              /> */}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => {
            setShowSkeleton(true);

            setSelectedCategory("");

            setTimeout(() => {
              setShowSkeleton(false);
            }, 1000);
          }}
          className={`px-5 py-2 rounded-full ${
              selectedCategory === ""
                ? "bg-primary text-white"
                : "bg-white border"
            }`}
        >
          All
        </button>

        {categories?.data?.map((item: any) => (
          <button
            key={item._id}
            onClick={() => {
              setShowSkeleton(true);

              setSelectedCategory(item._id);

              setTimeout(() => {
                setShowSkeleton(false);
              }, 1000);
            }}
            className={`px-5 py-2 rounded-full ${
              selectedCategory === item._id
                ? "bg-primary text-white"
                : "bg-white border"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        {isFetching && (
          <p className="text-primary text-sm">Loading courses...</p>
        )}
      </div>
      {showSkeleton ? (
        <div className="section-container py-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
            key={item}
            className="h-80 bg-gray-200 animate-pulse rounded-3xl"
            />
          ))}
          </div>
        </div>
      ) : (
        <CourseCard courses={data?.data} />
      )}
      {/* <CourseCard courses={data?.data} /> */}
    </>
  );
}
