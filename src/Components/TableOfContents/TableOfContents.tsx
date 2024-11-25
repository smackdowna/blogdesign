"use client";
import { useEffect, useState } from "react";

type TBlog = {
  blog: {
    _id: string;
    title: string;
    metaDescription: string;
    content: string;
  };
};

const TableOfContents: React.FC<TBlog> = ({ blog }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = blog.content;
    const extractedHeadings = Array.from(
      tempElement.querySelectorAll("h1, h2, h3, h4, h5, h6")
    ).map((heading, index) => ({
      id: heading.id || `heading-${index}`,
      text: heading.textContent || "",
    }));
    setHeadings(extractedHeadings);
  }, [blog.content]);

  return (
    <div className="bg-white flex flex-col gap-2 border border-primary-55 p-4 rounded-2xl w-full xl:w-[227px] font-Inter h-[207px]">
      <h2 className="text-lg font-bold">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={heading.id} className="flex items-start">
            <span className="font-semibold text-primary-10 mr-2">
              {index + 1}.
            </span>
            <a
              href={`#${heading.id}`}
              className="text-gray-700 hover:text-primary-10 transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
