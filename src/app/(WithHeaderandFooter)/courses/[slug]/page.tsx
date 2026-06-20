"use client";
import React, { useState } from "react";
import { IMAGE_URL } from "@/config";
import { useSingleCourse } from "@/hooks/useCourses";
import { useParams, useRouter } from "next/navigation";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaFileVideo } from "react-icons/fa6";
import LoginModal from "@/components/CommenComponent/LoginModal";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function CourseDetails() {
  const router = useRouter();
  // const [openLogin, setOpenLogin] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useSingleCourse(slug);
  const {openLogin,setOpenLogin,  isAuthenticated,} = useAuth();
  const [openModule, setOpenModule] = useState<number | null>(0);
  const course = data?.data;
  if (isLoading) return <p>Loading...</p>;
  if (!course) return <p>Course not found</p>;
  const discountPercentage = Math.round(
    ((Number(course.price) - Number(course.discountPrice)) /
      Number(course.price)) *
      100
  );
// const handleBuyCourse = async () => {
//   if (!isAuthenticated) {
//     router.push("/login");
//     return;
//   }

//   console.log("Open Razorpay");
// };

const handleBuyCourse = async () => {
  if (!isAuthenticated) {
    router.push("/login");
    return;
  }

  const options = {
    key: "rzp_test_SuhF6TWIWTZ1yF",
    amount:
      course.discountPrice *
      100,
    currency: "INR",
    name: "Stokzy",
    description:
      course.title,

    handler: function (response:any) {
      console.log(
        response
      );

      alert(
        "Payment Success"
      );
    },

    prefill: {
      name: "Pankaj",
      email:
        "test@gmail.com",
      contact:
        "9999999999",
    },

    theme: {
      color: "#57a846",
    },
  };

  const razorpay =
    new window.Razorpay(
      options
    );

  razorpay.open();
};
  // Temporary data (backend aane tak)
  const courseModules = [
    {
      id: 1,
      title: "Introduction to LLD BootCamp",
      lessons: [
        {
          id: 1,
          title: "Welcome to SUPRA Batch",
        },
      ],
    },
    {
      id: 2,
      title: "Let's Learn Java",
      lessons: [
        {
          id: 2,
          title: "Java Basics",
        },
        {
          id: 3,
          title: "Variables & Data Types",
        },
      ],
    },
    {
      id: 2,
      title: "Let's Learn Java",
      lessons: [
        {
          id: 2,
          title: "Java Basics",
        },
        {
          id: 3,
          title: "Variables & Data Types",
        },
      ],
    },
  ];

  return (
    <>
    <div className="section-container py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-gray-600 leading-8 mb-10">
            {course.shortDescription}
          </p>

          {/* Course Content */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Course Content
            </h2>

            <p className="text-gray-600 mb-6">
              Discover the key skills and concepts you'll master in this course.
            </p>

            <div className="space-y-5">
              {courseModules.map((module, index) => (
                <div
                key={module.id}
                className="bg-[#F5F5F5] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenModule(
                        openModule === index ? null : index
                      )
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <h3 className="font-semibold text-xl">
                      {module.title}
                    </h3>

                    {openModule === index ? (
                      <BiChevronUp size={24} />
                    ) : (
                      <BiChevronDown size={24} />
                    )}
                  </button>

                  {openModule === index && (
                    <div className="px-6 pb-5">
                      {module.lessons.map((lesson) => (
                        <div
                        key={lesson.id}
                          className="flex items-center gap-3 py-3"
                        >
                          <FaFileVideo
                            size={18}
                            className="text-gray-500"
                            />

                          <span className="text-gray-700">
                            {lesson.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        
        </div>

        <div>
          <div className="sticky top-24">
            <div className="bg-[#F7F7F7] rounded-3xl shadow-lg p-5">
              <img
                src={`${IMAGE_URL}${course.thumbnail}`}
                alt={course.title}
                className="w-full rounded-2xl"
                />

              <div className="mt-5 text-center">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <span className="text-4xl font-bold">
                    ₹{course.discountPrice}
                  </span>

                  <span className="text-lg text-gray-400 line-through">
                    ₹{course.price}
                  </span>

                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {discountPercentage}% Off
                  </span>
                </div>

                <p className="text-gray-500 mt-2">
                  (Included in subscription)
                </p>
              </div>

              <button
                  onClick={handleBuyCourse}
                  className="
                    w-full mt-6 py-4 rounded-xl
                    text-white font-semibold
                    bg-gradient-to-r
                    from-[#57a846]
                    via-[#6BCB5B]
                    to-[#9BE15D]
                  "
              >
                Buy Course
              </button>

             
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <LoginModal
  isOpen={openLogin}
  onClose={() => setOpenLogin(false)}
/> */}
                </>
  );
}