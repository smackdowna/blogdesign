/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const TableOfContents = ({ blog }: { blog: any }) => {
  const headings = blog.content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/g) || [];

  return (
    <div>
      <ul className="bg-primary-65 md:bg-white flex flex-col gap-3 border border-primary-55 p-4 md:rounded-2xl w-full h-fit font-Inter">
      <h3 className="font-semibold text-lg border-b pb-2">Table of Contents</h3>
        {headings.map((heading:any, index:number) => {
          const text = heading.replace(/<[^>]*>/g, '');
          const id = `heading-${index + 1}`;
          return (
            <li key={id}>
              <a href={`#${id}`} className="text-blue-500 hover:underline">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
