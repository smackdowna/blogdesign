// src/types/blog.ts

export interface Blog {
    title: string;
    description: string;
    author: string;
    authorImage: string; // You may want to change this to StaticImageData if using Next.js Image component
    date: string;
    tags: string[];
    imageUrl: string; // You may want to change this to StaticImageData if using Next.js Image component
}
