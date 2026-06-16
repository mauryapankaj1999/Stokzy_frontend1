import { notFound } from "next/navigation";

const blogs = [
  {
    id: 1,
    slug: "susan-electricals-india-ipo-review",
    title: "Susan Electricals India IPO GMP, Review, Price & Date 2026",
     image: "/img/Susan-Electricals-India-IPO.webp",
    date: "June 11, 2026",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

export default function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find(
    (item) => item.slug === params.slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <section className="py-10">
      <div className="section-container max-w-4xl">

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl h-[80vh] object-cover"
        />

        <h1 className="text-5xl font-bold mt-8">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-3">
          {blog.date}
        </p>

        <div className="mt-8 text-lg leading-9 text-gray-700">
          {blog.content}
        </div>

      </div>
    </section>
  );
}