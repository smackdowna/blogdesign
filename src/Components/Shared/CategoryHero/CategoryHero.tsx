"use client";

import './CategoryHero.css';
// import { ICONS } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from '@/public/assets';

interface CategoryHeroProps {
    title: string;
    description:string[];
    heroImage: string | StaticImageData;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title, description, heroImage }) => {
    return (
        <div className={`categoryHero section relative ${title}-bg w-full overflow-hidden`}>
            <div className="overlay-black-hero">
                <Image 
                    src={heroImage ? heroImage : IMAGES.travelHeroImg} 
                    alt={title} 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100}
                />
            </div>
            <div className="category-content">
                <motion.div 
                    className="category-header"
                    initial={{ opacity: 0, y: -50 }} // Initial state for animation
                    animate={{ opacity: 1, y: 0 }} // Animate to this state
                    transition={{ duration: 0.5 }} // Duration of the animation
                >
                    <h1 className="text-white">{title}</h1>
                    <span></span>
                </motion.div>
                <div className="features flex items-center">
                    {
                    description?.map((description, index) => (
                            
                            <motion.p 
                            key={index} // Add a unique key
                            className=""
                            initial={{ opacity: 0, y: 20 }} // Initial state for animation
                            animate={{ opacity: 1, y: 0 }} // Animate to this state
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each description's animation
                            
                            >{description}</motion.p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryHero;
