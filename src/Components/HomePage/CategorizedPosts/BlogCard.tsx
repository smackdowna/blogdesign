"use client";
import { formatDate } from "@/utils/convertDate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the types for the props
interface BlogCardProps {
  id:string;
  title: string;
  content: string;
  category?: string;
  author:{
    _id:string,
    full_name:string,
  };
  createdAt: string;
  thumbnail: {
    fileId: string;
    name: string;
    url: string;
    thumbnailUrl: string;
    _id: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, content, author, createdAt, thumbnail }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

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

    const htmlToPlainText = (html: string): string => {
      // Create a new DOMParser instance
      const parser = new DOMParser();
      
      // Parse the HTML string to a document
      const doc = parser.parseFromString(html, 'text/html');
      
      // Extract and return the plain text from the document
      return doc.body.textContent || '';
    };

    const plainText = htmlToPlainText(content);
    

  const truncatedDescription = isLargeScreen
    ? plainText.length > 50
      ? `${plainText.slice(0, 50)}...`
      : plainText
    : isMediumScreen
    ? plainText.length > 100
      ? `${plainText.slice(0, 100)}...`
      : plainText
    : plainText.length > 30
    ? `${plainText.slice(0, 30)}...`
    : plainText;


  return (
    <Link href={`blogs/${id}`} className="py-2 gap-2 flex items-center md:gap-4 border-b border-neutral-60 w-full lg:max-w-[513px] font-Inter">
      <div className="relative w-[93px] h-[93px] md:w-[146px] md:h-[146px] rounded-lg overflow-hidden">
  <Image
    src={thumbnail?.thumbnailUrl}
    alt={thumbnail?.name}
    fill
    quality={100}
    sizes="(max-width: 768px) 93px, (max-width: 1024px) 146px, 100vw"
    className="object-cover object-center rounded-lg w-full h-full"
  />
</div>

      <div>
        <h1 className="text-black text-sm md:text-base font-semibold leading-normal md:leading-6 lg:leading-[20.8px]">
          {truncatedTitle}
        </h1>
        {/* <p className="text-neutral-10 text-sm md:text-base leading-normal md:leading-6 xl:leading-[20.8px] mt-[10px]" >
          {truncatedDescription}
        </p> */}
        <p className="text-neutral-10 text-sm md:text-base leading-normal md:leading-6 xl:leading-[20.8px] mt-[10px]" dangerouslySetInnerHTML={{ __html: truncatedDescription }}/>

        <div className="flex items-center justify-between mt-4">
          <p className="text-neutral-20 text-xs md:text-sm leading-normal md:leading-6 xl:leading-[20.8px]">
            {author?.full_name}
          </p>
          <p className="text-neutral-20 text-xs md:text-sm leading-normal md:leading-6 xl:leading-[20.8px]">
          {formatDate(createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
