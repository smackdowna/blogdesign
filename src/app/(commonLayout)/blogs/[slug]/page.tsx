// src/app/blogs/[slug]/page.tsx

import { blogs } from '@/../Data/blog';
import { notFound } from 'next/navigation';
import { Blog } from '@/../types/blog';
import Image from 'next/image';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';
import './slug.css' 
import AdvertisementCard from '@/Components/Shared/AdvertisementCard/AdvertisementCard';

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

  const advertisement = {
    description: "Get Travel bookings done in a jiffy at flat 30%OFF",
    buttonText: "Book Now"
  }

  return (
   <div className="section blogdetail">
     <div className="container mx-auto px-4 py-8">
      <div className="blog-head flex flex-col gap-2 mb-4">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600">Author: {blog.author}</p>
            <p className="text-sm text-gray-600">Date: {blog.date}</p>
        </div>
      </div>
      <Image src={blog.imageUrl} alt={blog.title} width={100} height={30} className="mb-4 w-full h-[400px] object-cover" />
      <div className="blog-content">
        <div className="left">
            <AdvertisementCard advertisement={advertisement} />
        </div>
        <p className="text-gray-700 mb-4 middle">{blog.description}</p>
        <div className="right"></div>
      </div>
    </div>
    <hr />
    <NewsletterSubscribe />
   </div>
  );
};

export default BlogDetailPage;