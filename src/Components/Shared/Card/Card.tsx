"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from 'framer-motion'; // Import motion
import './Card.css'

interface CardProps {
    title: string;
    description: string;
    author: string;
    authorImage: string | StaticImageData;
    date: string;
    tags: string[];
    imageUrl: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, tags, description, author, authorImage, date, imageUrl }) => {
    return (
        <motion.div 
            className="BlogExploreCard flex w-[100%] sm:flex-row flex-col p-[24px]"
            initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
            animate={{ opacity: 1, y: 0 }} // Animate to original position
            transition={{ duration: 0.3 }} // Animation duration
        >
            <div className="card-content">
                <div className="desc">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <div className="w-full flex items-center gap-3">
                    <div className="author-image">
                        <Image 
                            src={authorImage} 
                            alt="author" 
                            className="rounded-full" 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div className="details flex flex-col h-full justify-between">
                        <h5>{author}</h5>
                        <p>{date}</p>
                    </div>
                </div>

                <div className="tags flex flex-wrap gap-3 mt-2">
                   {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="blog-banner">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    className="rounded-lg" 
                    width={300} 
                    height={200} 
                />
            </div>
        </motion.div>
    );
}

export default Card;
