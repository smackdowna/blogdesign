/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import AdvertisementCard from "../../../../Components/BlogDetailsPage/AdvertisementCard/AdvertisementCard";
import TableOfContents from "@/Components/BlogDetailsPage/TableOfContents/TableOfContents";

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `https://blogbackend-theta.vercel.app/api/v1/blog/${params.id}`
  );
  const dynamicPosts = await response.json();

  const blog = dynamicPosts?.data?.[0] || null;

  if (!blog) {
    return (
      <div className="section blogdetail">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center">Blog Not Found</h1>
        </div>
      </div>
    );
  }

  const advertisement = {
    description: "Get Travel bookings done in a jiffy at flat 30% OFF",
    buttonText: "Book Now",
  };

  return <BlogContent blog={blog} advertisement={advertisement} />;
};

// Separate functional component for dynamic content
const BlogContent = ({ blog, advertisement }: any) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-0 xl:px-[150px]">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Blog Header */}
        <h1 className="font-semibold font-Inter text-[30px] text-neutral-5 px-4 md:px-8 xl:px-0">
          {blog.title}
        </h1>

        {/* Blog Image */}
        <div className="relative w-full h-[200px] md:h-[400px] px-0 md:px-8 xl:px-0 mt-5">
          <Image
            src={blog.thumbnail?.thumbnailUrl || "/default-thumbnail.jpg"}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
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
            dangerouslySetInnerHTML={{ __html: blog.content }}
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
