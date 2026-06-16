// import { notFound } from "next/navigation";

// const courses = [
//   {
//     id: 1,
//     slug: "profit-trading",
//     title: "Stock Market Foundation",
//     image: "/img/courseimg.png",
//     level: "Beginner",
//     duration: "8 Weeks",
//     price: "₹4,999",
//     description:
//       "Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
//   },
// ];

// export default function CourseDetails({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const course = courses.find(
//     (item) => item.slug === params.slug
//   );

//   if (!course) {
//     notFound();
//   }

//   return (
//     <section className="py-20">
//       <div className="section-container">

//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full max-w-xl rounded-2xl"
//         />

//         <h1 className="text-5xl font-bold mt-8">
//           {course.title}
//         </h1>

//         <div className="flex gap-4 mt-4">
//           <span>{course.level}</span>
//           <span>{course.duration}</span>
//           <span>{course.price}</span>
//         </div>

//         <p className="mt-6 text-gray-600">
//           {course.description}
//         </p>

//       </div>
//     </section>
//   );
// }



import { notFound } from "next/navigation";

const courses = [
  {
    id: 1,
    slug: "profit-trading",
    title: "Personal 1-On-1 Classes",
    image: "/img/courseimg.png",
    level: "Beginner To Advance",
    duration: "3 Months",
    price: "₹1,77,000",
    description:
      "Our Diamond 1-on-1 class covers everything from basics to advanced, tailored for both beginners and experienced market learners.",
  },
];

export default function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses.find(
    (item) => item.slug === params.slug
  );

  if (!course) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f5d8c5] pt-24 pb-40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <span className="text-orange-500 font-medium">
                Online & Offline Course
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight">
                Personal
                <span className="text-orange-500"> 1-On-1</span>
                <br />
                Classes
              </h1>

              <p className="mt-6 text-gray-700 max-w-xl">
                {course.description}
              </p>
            </div>

            {/* Right Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">

                <img
                  src={course.image}
                  alt=""
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between text-sm mb-6">
                    <span>{course.level}</span>
                    <span>45K+ Learners</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="font-semibold">29th June</p>
                      <span className="text-sm text-gray-500">
                        Online / Offline
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold">Timing</p>
                      <span className="text-sm text-gray-500">
                        Your Availability
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold">Days</p>
                      <span className="text-sm text-gray-500">
                        Mon - Fri
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold">Duration</p>
                      <span className="text-sm text-gray-500">
                        On Your Pace
                      </span>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4 mb-6">
                    <h3 className="text-4xl font-bold text-orange-500">
                      {course.price}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-orange-500 text-white py-3 rounded-xl font-semibold">
                      Buy Now
                    </button>

                    <button className="border border-orange-500 text-orange-500 py-3 rounded-xl font-semibold">
                      Talk To Expert
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">

          {/* Stats */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              <div>
                <h4 className="font-bold text-xl">4.8</h4>
                <p className="text-gray-500">20K+ Ratings</p>
              </div>

              <div>
                <h4 className="font-bold text-xl">3 Months</h4>
                <p className="text-gray-500">Duration</p>
              </div>

              <div>
                <h4 className="font-bold text-xl">English & Hindi</h4>
                <p className="text-gray-500">Language</p>
              </div>

              <div>
                <h4 className="font-bold text-xl">45,000+</h4>
                <p className="text-gray-500">Learners</p>
              </div>

            </div>
          </div>

          {/* Content + Sticky Card */}
          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6">
                Best Personal 1-On-1 Classes
              </h2>

              <div className="space-y-5 text-gray-700 leading-8">
                <p>
                  Recognized as the Best Online Stock Market Course
                  in India...
                </p>

                <p>
                  Learn technical analysis, options trading,
                  risk management and professional trading
                  strategies.
                </p>

                <p>
                  Join today and master the stock market
                  with confidence.
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-xl mb-4">
                  This Course Includes
                </h3>

                <ul className="space-y-3">
                  <li>✔ 50+ Live Sessions</li>
                  <li>✔ Recorded Classes</li>
                  <li>✔ Premium Tools Access</li>
                  <li>✔ Community Support</li>
                  <li>✔ Lifetime Access</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}