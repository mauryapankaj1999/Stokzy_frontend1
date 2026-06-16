import { IMAGE_URL } from "@/config";
import Link from "next/link";
import React from "react";

export default function CourseCard({ courses }: any) {
  return (
    <>
      <div className="section-container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses?.map((el: any, indx: number) => (
            <div
              key={el?.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-56 overflow-hidden">
                {/* <Link href={`/courses/${el.slug}`}> */}
                <img
            src={`${IMAGE_URL}${el.thumbnail}`}

            alt={el.thumbnail}
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
                {/* </Link> */}

                {/* <span className="absolute top-4 left-4 bg-[#7ED957] text-white text-sm px-3 py-1 rounded-full">
            {course.level}
          </span> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                  {el?.title}
                </h3>
                <p className="text-[13px] text-gray-600  line-clamp-2">
                  {el?.shortDescription}
                </p>
                <div className="flex justify-between text-gray-500 text-[12px] my-2">
                  <span>{el?.duration}</span>
                  <span>{el?.price}</span>
                </div>

                <button className="w-full text-[15px] bg-primary text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
