"use client"

import './CategoryHero.css'
import { ICONS } from "@/public/assets";
import Image from "next/image";

interface Product {
    icon: string;
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
}


const CategoryHero: React.FC<CategoryHeroProps> = ({ title, Products }) => {
    return (
        <div className={`categoryHero section relative ${title}-bg w-full`}>
            <div className="overlay-black-hero"></div>
            <div className="category-content">
                <div className="category-header">
                    <h1 className="text-white">{title}</h1>
                    <span></span>
                </div>
                <div className="features">
                    <div className="feature">
                        <Image src={ICONS[Products.Product1.icon as keyof typeof ICONS]} alt={Products.Product1.title} />
                        <h4>{Products.Product1.title}</h4>
                        <p>{Products.Product1.description}</p>
                    </div>
                    <div className="feature">
                        <Image src={ICONS[Products.Product2.icon as keyof typeof ICONS]} alt={Products.Product2.title} />
                        <h4>{Products.Product2.title}</h4>
                        <p>{Products.Product2.description}</p>
                    </div>
                    <div className="feature">
                        <Image src={ICONS[Products.Product3.icon as keyof typeof ICONS]} alt={Products.Product3.title} />
                        <h4>{Products.Product3.title}</h4>
                        <p>{Products.Product3.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CategoryHero;