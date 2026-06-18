"use client";
import { IMAGE_URL } from "@/config";
import { useSingleCourse } from "@/hooks/useCourses";
import { notFound, useParams } from "next/navigation";
export default function CourseDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useSingleCourse(slug);
  const course = data?.data;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>

    <div className="">
      <div className="section-container">
      <div className="grid grid-cols-2">
          <div className="col-span-1">asdfadsf</div>
          <div className="col-span-1">asdfadsfasd</div>
      </div>
      </div>
    </div>
      <div className="section-container py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow mt-8">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>

              <ul className="grid md:grid-cols-2 gap-3">
                <li>✔ Stock Market Basics</li>
                <li>✔ Technical Analysis</li>
                <li>✔ Swing Trading</li>
                <li>✔ Risk Management</li>
                <li>✔ Portfolio Building</li>
                <li>✔ Live Market Examples</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow mt-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: course.description,
                }}
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-5">
                <img
                  src={`${IMAGE_URL}${course.thumbnail}`}
                  className="w-full rounded-lg"
                />

                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    ₹{course.discountPrice}
                  </span>

                  <span className="ml-2 line-through text-gray-400">
                    ₹{course.price}
                  </span>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg mt-4">
                  Buy Now
                </button>

                <button className="w-full border py-3 rounded-lg mt-3">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
