// "use client";

// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// export default function BlogSection() {
//   const sectionRef = useRef();

//   useGSAP(() => {
//     gsap.from(".blog-heading", {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//       },
//     });

//     gsap.from(".blog-card", {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".blog-grid",
//         start: "top 80%",
//       },
//     });
//   });

//   const blogs = [
//     {
//       title: "Best Algo Trading Strategies For 2026",
//       image: "/img/blogimg/blogimg3.jpg",
//       category: "Algo Trading",
//     },
//     {
//       title: "How Smart Money Trades Options",
//       image: "/img/blogimg/blogimg1.jpg",
//       category: "Options",
//     },
//     {
//       title: "Top Forex Mistakes Beginners Make",
//       image: "/img/blogimg/blogimg2.jpg",
//       category: "Forex",
//     },
//     {
//       title: "AI In Trading: Future Of Investing",
//       image: "/img/blogimg/blogimg1.jpg",
//       category: "AI",
//     },
//     {
//       title: "Nifty Prediction Using Price Action",
//       image: "/img/blogimg/blogimg2.jpg",
//       category: "Stocks",
//     },
//     {
//       title: "Nifty Prediction Using Price Action",
//       image: "/img/blogimg/blogimg1.jpg",
//       category: "Stocks",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-[#f8f8f8]"
//     >
//       <div className="section-container mx-auto px-4">

//         <div className="blog-heading text-center mb-14">
//           {/* <span className="text-[#6cb43f] font-semibold">
//             Latest Insights
//           </span> */}

//           <h2 className="text-4xl font-bold mb-1  leading-tight text-[#0F172A]">
//             Trading Blogs & Market Analysis
//           </h2>

//           <p className="mb-8 text-gray-500 mt-2 text-[14px] mx-auto">
//             Stay updated with market trends, algo trading
//             strategies, forex insights and investment ideas.
//           </p>
//         </div>

//         <div className="blog-grid grid lg:grid-cols-3 gap-6">

//           {/* Featured Blog */}
//           <div className="blog-card lg:col-span-2 relative rounded-3xl overflow-hidden h-[500px] group">
//             <img
//               src={blogs[0].image}
//               alt=""
//               className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//             <div className="absolute bottom-0 p-8 text-white">
//               <span className="bg-[#6cb43f] px-4 py-2 rounded-full text-sm">
//                 {blogs[0].category}
//               </span>

//               <h3 className="text-4xl font-bold mt-4">
//                 {blogs[0].title}
//               </h3>
//             </div>
//           </div>

//           {/* Side Blogs */}
//           <div className="flex flex-col gap-6">
//             {blogs.slice(1, 3).map((item, index) => (
//               <div
//                 key={index}
//                 className="blog-card relative rounded-3xl overflow-hidden h-[238px] group"
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//                 <div className="absolute bottom-0 p-5 text-white">
//                   <span className="text-[#6cb43f] text-sm">
//                     {item.category}
//                   </span>

//                   <h3 className="font-bold text-xl">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Cards */}
//           {blogs.slice(3).map((item, index) => (
//             <div
//               key={index}
//               className="blog-card bg-white rounded-3xl overflow-hidden shadow-lg"
//             >
//               <img
//                 src={item.image}
//                 alt=""
//                 className="w-full h-60 object-cover"
//               />

//               <div className="p-6">
//                 <span className="text-[#6cb43f] font-semibold">
//                   {item.category}
//                 </span>

//                 <h3 className="text-xl font-bold mt-2">
//                   {item.title}
//                 </h3>

//                 <button className="mt-4 text-[#6cb43f] font-semibold">
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { FiCalendar } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      category: "Account",
      image: "/img/blogimg/blogimg3.jpg",
      title: "USD vs EUR: What's Driving the Current Market Trend?",
      description:
        "Automated financial tracking has transformed the way individuals and businesses manage finances.",
      date: "December 4, 2025",
    },
    {
      id: 2,
      category: "Finance",
      image: "/img/blogimg/blogimg2.jpg",
      title: "Top Factors That Influence Currency Value in 2025",
      description:
        "Discover key economic indicators and market forces shaping currency movements.",
      date: "December 4, 2025",
    },
    {
      id: 3,
      category: "Crypto",
      image: "/img/blogimg/blogimg3.jpg",
      title: "Boosting Your Crypto Cash Flow: Essential Management",
      description:
        "Learn practical strategies to improve crypto portfolio performance and cash flow.",
      date: "December 4, 2025",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-8">
              Blog  & Updates
            </h2>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition duration-500 group"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* <span className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-medium">
                  {blog.category}
                </span> */}
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-[20px] font-bold leading-tight text-[#0F172A] line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-[16px] text-gray-600 mt-2 leading-2">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between mt-8">

                  <div className="flex items-center gap-2 text-gray-500">
                    <FiCalendar />
                    <span>{blog.date}</span>
                  </div>

                  <button className="flex items-center gap-2 font-medium hover:text-[#7ED957] transition">
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}