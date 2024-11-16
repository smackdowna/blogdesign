import Image from 'next/image';
import NewsletterSubscribe from '../../components/NewsletterSubscribe/NewsletterSubscribe';
import './slug.css'
import AdvertisementCard from '../../../../Components//Shared/AdvertisementCard/AdvertisementCard'
import { formatDate } from '@/utils/convertDate';

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`https://blogbackend-theta.vercel.app/api/v1/blog/${params.id}`);
  const dynamicPosts = await response.json();



  const advertisement = {
    description: "Get Travel bookings done in a jiffy at flat 30%OFF",
    buttonText: "Book Now"
  }

  return (
   <div className="section blogdetail">
     <div className="container mx-auto px-4 py-8">
      <div className="blog-head flex flex-col gap-2 mb-4">
        <h1 className="text-3xl font-bold mb-4">{dynamicPosts?.data?.title}</h1>
        <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600">Author: {dynamicPosts?.data?.author?.full_name}</p>
            <p className="text-sm text-gray-600">Date: {formatDate(dynamicPosts?.data?.createdAt)}</p>
        </div>
      </div>
      <Image src={dynamicPosts?.data?.thumbnail?.thumbnailUrl} alt={dynamicPosts?.data?.title} width={800} height={400} className="mb-4 w-full h-[400px] object-cover" />
      <div className="blog-content">
            <AdvertisementCard description={advertisement.description} buttonText={advertisement.buttonText} />
        <p className="text-gray-700 mb-4 middle">{dynamicPosts?.data?.content}</p>
        <div className="right"></div>
      </div>
    </div>
    <hr />
    <NewsletterSubscribe />
   </div>
  );
};

export default BlogDetailPage;