/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ExploreBlogsCard from "./ExploreBlogsCard";

interface SubCategory {
  _id: string;
  name: string;
}

interface ExploreBlogsProps {
  subCategory: SubCategory[];
}

const ExploreBlogs: React.FC<ExploreBlogsProps> = ({ subCategory }) => {
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>(subCategory?.[0]?.name || "");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://blogbackend-theta.vercel.app/api/v1/blog");
        const data = await response.json();
        setAllBlogs(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);

  const filteredBlogs = allBlogs?.filter((blog) => blog.subCategory === activeTab);

  return (
    <div className="mt-10 md:mt-8 xl:mt-[64px] px-4 md:px-8 xl:px-[150px] max-w-[1440px] mx-auto flex flex-col gap-9 mb-11">
        <h1 className="text-black font-Inter text-2xl font-bold leading-[38px] text-start md:text-center">Explore the blogs</h1>

      {/* Tabs */}
      <div className="bg-primary-110 flex items-center gap-[2px] w-fit max-w-full md:max-w-[448px] mx-0 md:mx-auto h-11 rounded-[10px] overflow-x-auto">
  {
    subCategory?.map((category, index) => (
      <button
        key={index}
        onClick={() => setActiveTab(category.name)}
        className={`px-4 h-11 whitespace-nowrap ${activeTab === category.name ? "bg-primary-60 text-black border border-neutral-30 rounded-lg" : "text-neutral-25 bg-none"}`}
      >
        {category.name}
      </button>
    ))
  }
</div>


      {/* Loader or Render Filtered Blogs */}
      <div className="flex flex-col gap-10 md:gap-11">
        {isLoading ? (
          // Loader animation
          <div className="size-10 flex gap-2 items-center justify-center mx-auto">
            <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div>
            <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div>
            <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div>
          </div>
        ) : filteredBlogs?.length > 0 ? (
          <motion.div
            className="blog-cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredBlogs?.map((blog, index) => (
              <Link key={index} href={`/blogs/${blog._id}`}>
                <ExploreBlogsCard
                  tags={blog.tags}
                  title={blog.title}
                  description={blog.content}
                  author={blog.author}
                  date={blog.createdAt}
                  imageUrl={blog.thumbnail?.thumbnailUrl}
                />
              </Link>
            ))}
          </motion.div>
        ) : (
          <div>No blogs found for this category</div>
        )}
      </div>
    </div>
  );
};

export default ExploreBlogs;
