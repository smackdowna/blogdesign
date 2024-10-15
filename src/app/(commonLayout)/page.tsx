import { IMAGES } from "@/public/assets";
import Hero from "./components/Hero/Hero";
import CategorizedPosts from "./components/CategorizedPosts/CategorizedPosts";

import { StaticImageData } from 'next/image';
import ExploreTopics from "./components/ExploreTopics/ExploreTopics";
import NewsletterSubscribe from "./components/NewsletterSubscribe/NewsletterSubscribe";

export type TPost= {
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string | StaticImageData;
}

export type TCategorySection= {
  sectionHeading: string;
  isBordervisible: boolean;
  isLinkAvailable: boolean;
  path?: string;
  data: TPost[];
}

export default function page() {

  const homePageCategorizedPosts : TCategorySection[] = [
    {
      sectionHeading : "Top Featured Posts",
      isBordervisible:false,
      isLinkAvailable:false,
      data : [
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
    ]
    },
    {
      sectionHeading : "Travel",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/",
      data : [
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
    ]
    },
    {
      sectionHeading : "Gossips",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/",
      data : [
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
    ]
    },
    {
      sectionHeading : "Entertainment",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/",
      data : [
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
    ]
    },
    {
      sectionHeading : "Technology",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/",
      data : [
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
    ]
    },
    {
      sectionHeading : "Reviews",
      isBordervisible:true,
      isLinkAvailable:true,
      path : "/",
      data : [
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
        {
            title:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            description:"Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra. Wanderlust: Discovering Hidden Gems, exploring the geeks of tra",
            author: "Thilagar Gobinath",
            date:"October 15, 2023",
            imageUrl:IMAGES.featuredPostImg
        },
    ]
    },
  ]
  return (
    <div className="flex flex-col">
      <Hero/>
      <div className='bg-primary-60 py-[64px] flex flex-col gap-[64px]'>
      {
        homePageCategorizedPosts.map((section, index) => 
        <CategorizedPosts key={index} section={section} />
        )
      }
      <ExploreTopics/>
      </div>
      <NewsletterSubscribe/>
    </div>
  );
}
