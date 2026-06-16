import Headingagebanner from "@/components/CommenComponent/Headingagebanner";
import Link from "next/link";
import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Susan Electricals India IPO GMP, Review, Price & Date 2026",
          slug: "susan-electricals-india-ipo-review",

      image: "/img/Susan-Electricals-India-IPO.webp",
      date: "June 11, 2026",
      comments: 0,
      excerpt:
        "Susan Electricals India IPO GMP, Date, Price Details in 2026. Should Investors Apply or Avoid?",
    },
    {
      id: 2,
      title: "How To Study Stock Market In Just 8 Weeks",
      image: "/img/Susan-Electricals-India-IPO.webp",
      date: "June 9, 2026",
      comments: 0,
      excerpt:
        "A proven beginner-to-trader roadmap designed for disciplined learning.",
    },
    {
      id: 3,
      title: "Best Stocks To Buy Today India For Short Term Gains",
      image: "/img/Susan-Electricals-India-IPO.webp",
      date: "June 8, 2026",
      comments: 0,
      excerpt: "Where smart investors are positioning in 2026-2027.",
    },
    {
      id: 1,
      title: "Susan Electricals India IPO GMP, Review, Price & Date 2026",
      image: "/img/Susan-Electricals-India-IPO.webp",
      date: "June 11, 2026",
      comments: 0,
      excerpt:
        "Susan Electricals India IPO GMP, Date, Price Details in 2026. Should Investors Apply or Avoid?",
    },
    {
      id: 2,
      title: "How To Study Stock Market In Just 8 Weeks",
      image: "/img/Susan-Electricals-India-IPO.webp",
      date: "June 9, 2026",
      comments: 0,
      excerpt:
        "A proven beginner-to-trader roadmap designed for disciplined learning.",
    },
    {
      id: 3,
      title: "Best Stocks To Buy Today India For Short Term Gains",
      image: "/img/Susan-Electricals-India-IPO.webp",
      date: "June 8, 2026",
      comments: 0,
      excerpt: "Where smart investors are positioning in 2026-2027.",
    },
  ];
  return (
    <>
      <Headingagebanner pagename="Blogs" />

      <section className="py-24 bg-[#f8fafc]">
        <div className="section-container">
          {/* Blog Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <article key={blog.id} className="group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                    <Link href={`/blog/${blog.slug}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                    />
                    </Link>
                </div>

                {/* Content */}
                <div className="mt-6">
                    <Link href={`/blog/${blog.slug}`}>
                  <h3 className="text-lg font-bold leading-tight text-gray-900 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                    </Link>
                  {/* 
            <div className="flex items-center gap-2 text-gray-500 mt-4 text-sm">
              <span>{blog.date}</span>
              <span>|</span>
              <span>No Comments</span>
            </div> */}

                  <p className="text-gray-600 mt-5 leading-6 text-md line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <button className="mt-6 text-[#7ED957] font-semibold flex items-center gap-2">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
