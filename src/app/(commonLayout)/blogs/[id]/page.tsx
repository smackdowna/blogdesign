import { blogs } from '@/../Data/blog';
import { notFound } from 'next/navigation';
import { Blog } from '@/../types/blog';
import Image from 'next/image';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';
import './slug.css'
import AdvertisementCard from '../../../../Components//Shared/AdvertisementCard/AdvertisementCard'

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}
const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  console.log('Received blog ID:', params.id);

  const blogId = parseInt(params.id, 10);
  const blog = blogs.find((b: Blog) => b.id === blogId);

  console.log('Found blog:', blog ? blog.title : 'Not found');

  if (!blog) {
    notFound();
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