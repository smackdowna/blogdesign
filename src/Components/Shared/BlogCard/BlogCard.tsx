"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

// Define the types for the props
interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string | StaticImageData;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, author, date, imageUrl }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize screen size check on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMediumScreen = screenWidth >= 768;
  const isLargeScreen = screenWidth >= 1024;

  // Truncate title and description based on screen size
  const truncatedTitle = isLargeScreen
    ? title.length > 45
      ? `${title.slice(0, 45)}...`
      : title
    : isMediumScreen
    ? title.length > 75
      ? `${title.slice(0, 75)}...`
      : title
    : title.length > 40
    ? `${title.slice(0, 40)}...`
    : title;

  const truncatedDescription = isLargeScreen
    ? description.length > 50
      ? `${description.slice(0, 50)}...`
      : description
    : isMediumScreen
    ? description.length > 100
      ? `${description.slice(0, 100)}...`
      : description
    : description.length > 30
    ? `${description.slice(0, 30)}...`
    : description;


  return (
    <div className="py-2 gap-2 flex items-center md:gap-4 border-b border-neutral-60 w-full lg:max-w-[513px] font-Inter">
      <Image src={imageUrl} alt="blog image" className="w-[93px] h-full object-cover object-center md:size-[146px] rounded-lg" />

      <div>
        <h1 className="text-black text-sm md:text-base font-semibold leading-normal md:leading-6 lg:leading-[20.8px]">
          {truncatedTitle}
        </h1>
        <p className="text-neutral-10 text-sm md:text-base leading-normal md:leading-6 xl:leading-[20.8px] mt-[10px]">
          {truncatedDescription}
        </p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-neutral-20 text-xs md:text-sm leading-normal md:leading-6 xl:leading-[20.8px]">
            {author}
          </p>
          <p className="text-neutral-20 text-xs md:text-sm leading-normal md:leading-6 xl:leading-[20.8px]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
