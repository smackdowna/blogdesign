// src/app/blogs/[slug]/page.tsx

import { blogs } from '@/../Data/blog'; // Adjust the import path as needed
import { notFound } from 'next/navigation';
import { Blog } from '@/../types/blog'; // Adjust the import path as needed
import Image from 'next/image';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: encodeURIComponent(blog.title.replace(/\s+/g, '-').toLowerCase()),
  }));
}

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  // Decode the URL-encoded slug
  const decodedSlug = decodeURIComponent(params.slug);
  
  // Convert slug back to title format (replace hyphens with spaces)
  const cleanedSlug = decodedSlug.replace(/-/g, ' ');

  // Find the blog post by matching the title (case insensitive)
  const blog = blogs.find(
    (b: Blog) => b.title.toLowerCase() === cleanedSlug.toLowerCase()
  );

  if (!blog) {
    notFound(); // Trigger a 404 page if the blog is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Image src={blog.imageUrl} alt={blog.title} width={600} height={400} className="mb-4 rounded-lg" />
      <p className="text-gray-700 mb-4">{blog.description}</p>
      <p className="text-sm text-gray-600">Author: {blog.author}</p>
      <p className="text-sm text-gray-600">Date: {blog.date}</p>
    </div>
  );
};

export default BlogDetailPage;