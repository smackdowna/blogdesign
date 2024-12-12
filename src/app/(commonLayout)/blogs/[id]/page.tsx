/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import AdvertisementCard from "@/Components/BlogDetailsPage/AdvertisementCard/AdvertisementCard";
import TableOfContents from "@/Components/BlogDetailsPage/TableOfContents/TableOfContents";
import Loader from "@/Components/Loader/Loader";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogDetailPage =  ({ params }: { params: { id: string } }) => {
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        `https://blogbackend-theta.vercel.app/api/v1/blog/${params.id}`
      );
      const dynamicPosts = await response.json();
      setBlog(dynamicPosts?.data?.[0]);
    };

    fetchBlog();
  }, [params.id]);

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader/>
      </div>
    );
  }

  const advertisement = {
    description: "Get Travel bookings done in a jiffy at flat 30% OFF",
    buttonText: "Book Now",
  };

  return <BlogContent blog={blog} advertisement={advertisement} />;
};

const BlogContent = ({ blog, advertisement }: any) => {
  const [contentWithIds, setContentWithIds] = useState<string>(blog.content);

  const addIdsToHeadings = (htmlContent: string) => {
    if (typeof window !== "undefined" && window.DOMParser) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");
      const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headingElements.forEach((el, index) => {
        el.id = `heading-${index + 1}`;
      });

      return doc.body.innerHTML;
    }
    return htmlContent;
  };

  useEffect(() => {
    const updatedContent = addIdsToHeadings(blog.content);
    setContentWithIds(updatedContent);
  }, [blog.content]);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-0 xl:px-[150px]">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Blog Header */}
        <h1 className="font-semibold font-Inter text-[30px] text-neutral-5 px-4 md:px-8 xl:px-0">
          {blog.title}
        </h1>

        {/* Blog Image */}
        <div className="relative w-full h-[200px] md:h-[400px] xl:h-[600px] px-0 md:px-8 xl:px-0 mt-3">
          <Image
            src={blog.thumbnail?.thumbnailUrl || "/default-thumbnail.jpg"}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg h-full"
          />
        </div>

        {/* Blog Content and Right Sidebar */}
        <div className="flex flex-col xl:flex-row gap-[45px] mt-0 md:mt-[30px]">
          <div className="flex flex-col md:flex-row gap-10 md:gap-8 px-0 md:px-8 xl:px-0">
            <div className="">
              <AdvertisementCard
                description={advertisement.description}
                buttonText={advertisement.buttonText}
              />
            </div>
            {/* Scrollable Table of Contents */}
            <div className="block xl:hidden px-4 md:px-0 xl:px-0">
              <TableOfContents blog={blog} />
            </div>
          </div>

          <div
            className="text-gray-700 flex-1 px-4 md:px-8 xl:px-0"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          ></div>

          {/* Scrollable Table of Contents */}
          <div className="hidden xl:block px-4 md:px-8 xl:px-0">
            <TableOfContents blog={blog} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
