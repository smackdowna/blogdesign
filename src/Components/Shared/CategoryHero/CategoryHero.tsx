"use client";

import './CategoryHero.css';
import { ICONS } from "@/public/assets";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"; // Import motion

interface Product {
    iconWhite: string;
    iconBlack: string;
    title: string;
    description: string;
}

interface CategoryHeroProps {
    title: string;
    Products: {
        Product1: Product;
        Product2: Product;
        Product3: Product;
    };
    heroImage: string | StaticImageData;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title, Products, heroImage }) => {
    return (
        <div className={`categoryHero section relative ${title}-bg w-full overflow-hidden`}>
            <div className="overlay-black-hero">
                <Image 
                    src={heroImage} 
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
                <div className="features">
                    {Object.values(Products).map((product, index) => (
                        <motion.div 
                            key={index} // Add a unique key
                            className="feature"
                            initial={{ opacity: 0, y: 20 }} // Initial state for animation
                            animate={{ opacity: 1, y: 0 }} // Animate to this state
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each product's animation
                        >
                            <Image 
                                src={ICONS[product.iconWhite as keyof typeof ICONS]} 
                                alt={product.title} 
                                className='product-icon-white'
                            />
                            <Image 
                                src={ICONS[product.iconBlack as keyof typeof ICONS]} 
                                alt={product.title} 
                                className='product-icon-black'
                            />
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryHero;
