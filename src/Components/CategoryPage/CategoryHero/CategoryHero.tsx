"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { IMAGES, ICONS } from "@/public/assets";
import Container from "@/Components/Container/Container";

interface CategoryHeroProps {
  title: string;
  description: string[];
  heroImage: string | StaticImageData;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({
  title,
  description,
  heroImage,
}) => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <Image
        src={heroImage ? heroImage : IMAGES.travelHeroImg}
        alt={title}
        width={1920}
        height={557}
        className="object-cover w-full h-[400px] lg:h-[557px]"
        quality={100}
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 hidden md:block" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center px-4 md:px-8 xl:px-[150px] max-w-[1440px] mx-auto">
        <div className="text-white text-center md:text-left">
          {/* Title with animation */}
          <motion.h1
            className="text-[32px] md:text-[72px] font-medium font-Inter border-b-2 border-primary-100 pb-1 w-fit hidden md:block"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>

          {/* Desktop Description */}
          <div className="mt-[70px] hidden md:flex gap-[56px]">
            {description?.map((desc, index) => (
              <motion.div
                key={index}
                className="text-sm flex items-start lg:items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image src={ICONS.dot} alt="dot-icon" className="size-12" />
                <p className="text-white">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* For mobile */}
      <div className="md:hidden flex flex-col gap-5 px-4 mt-6">
        {description?.map((desc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-sm text-neutral-110">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHero;
