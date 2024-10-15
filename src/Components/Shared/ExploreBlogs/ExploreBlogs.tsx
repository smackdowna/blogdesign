"use client";
import { useState } from 'react';
import './ExploreBlogs.css';
import Card from "../Card/Card";
import Image, { StaticImageData } from 'next/image';
import { ICONS } from '@/public/assets';
import  Link from 'next/link';
import { motion } from 'framer-motion'; // Import framer-motion for animations

interface Blog {
    title: string;
    description: string;
    author: string;
    authorImage: string | StaticImageData;
    date: string;
    tags: string[];
    imageUrl: string | StaticImageData;
}

interface ExploreBlogsProps {
    tags: string[];
    blogs: Blog[];
}

const ExploreBlogs: React.FC<ExploreBlogsProps> = ({ tags, blogs }) => {
    const [activeTab, setActiveTab] = useState(tags[0] || 'Adventures'); // Use first tag as default
    const [showMore, setShowMore] = useState(false); // State to toggle show more/less

    // Filter blogs by active tab
    const filteredBlogs = blogs.filter(blog => blog.tags.includes(activeTab));

    // Limit to maximum of 3 blogs
    const displayedBlogs = showMore ? filteredBlogs : filteredBlogs.slice(0, 3);

    return (
        <div className="section ExploreBlogs overflow-hidden">
            <div className="title">
                <h4>Explore the blogs</h4>
                <p className="font-medium">
                    Join me on a delightful journey filled with travel tales, tasty recipes, and lifestyle tips that inspire warmth and connection.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex tab-container gap-1">
                {tags.map((tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-4 tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(tab);
                            setShowMore(false); // Reset to show the first 3 when switching tabs
                        }}
                    >
                        <h5>{tab}</h5>
                    </button>
                ))}
            </div>

            {/* Render filtered blogs */}
            <div className="mt-4 blog-container">
                {displayedBlogs.length > 0 ? (
                    <motion.div 
                        className="blog-cards"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        {displayedBlogs.map((blog, index) => (
                            <Link key={index} href={`/blogs/${blog.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                <Card
                                    tags={blog.tags}
                                    title={blog.title}
                                    description={blog.description}
                                    author={blog.author}
                                    authorImage={blog.authorImage}
                                    date={blog.date}
                                    imageUrl={blog.imageUrl}
                                />
                            </Link>
                        ))}
                    </motion.div>
                ) : (
                    <div>No blogs found for this category</div>
                )}
            </div>

            {/* View More / View Less Toggle */}
            {filteredBlogs.length > 3 && (
                <div className="mt-4 text-center">
                    <button 
                        onClick={() => setShowMore(!showMore)} 
                        className="view-more-btn flex items-center gap-1 mx-auto"
                    >
                        {showMore ? 'View Less' : 'View More'}
                        <Image 
                            src={ICONS.angleDown} 
                            alt="icon" 
                            className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} // Rotate animation
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

export default ExploreBlogs;
