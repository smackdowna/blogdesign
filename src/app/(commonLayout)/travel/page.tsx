import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import CategoryHero from "@/Components/Shared/CategoryHero/CategoryHero";
import ExploreBlogs from "@/Components/Shared/ExploreBlogs/ExploreBlogs";
import { IMAGES } from "@/public/assets";

export default function TravelPage() {
    const Products = {
        Product1 : {
            iconWhite: 'travelIcon1',
            iconBlack: 'travelIcon1Black',
            title: 'Explore the world',
            description: 'Join me as I share my travel adventures, from hidden gems to popular destinations.'
        },
        Product2 : {
            iconWhite: 'travelIcon2',
            iconBlack: 'travelIcon2Black',
            title: 'Backpack Suggestions',
            description: 'Discover simple and delightful recipes that bring warmth to your kitchen.'
        },
        Product3 : {
            iconWhite: 'travelIcon3',
            iconBlack: 'travelIcon3Black',
            title: 'Everyday Inspiration',
            description: 'Find tips and tricks for a balanced lifestyle full of joy and creativity'
        }
    }

    const tags = ['Adventures', 'Thrills', 'Treks', 'Biking', 'Hiking'];
    const blogs = [
        // Adventures
        {
            id: 1,
            title: 'Conquering the Alps: A Journey Through the Heart of Adventure',
            description: 'Explore the breathtaking landscapes of the Alps, filled with thrilling experiences and stunning views.',
            author: 'Emily Carter',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'October 1, 2024',
            tags: ['Adventures', 'Thrills'],
            imageUrl: 'https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 2,
            title: 'Discovering the Amazon Rainforest: An Adventure Awaits',
            description: 'Dive into the wild beauty of the Amazon rainforest, home to exotic wildlife and lush landscapes.',
            author: 'Lucas Martinez',
            date: 'September 15, 2024',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            tags: ['Adventures', 'Thrills'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 3,
            title: 'Sailing the Mediterranean: A Journey Across Blue Waters',
            description: 'Experience the joys of sailing through the Mediterranean, discovering hidden coves and ancient ports.',
            author: 'Olivia Brown',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'August 5, 2024',
            tags: ['Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
        
        // Biking
        {
            id: 4,
            title: 'Biking Across the Rockies: A Cyclist’s Dream',
            description: 'From rugged mountain trails to serene forest paths, discover the ultimate biking experience in the Rockies.',
            author: 'Michael Green',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'September 20, 2024',
            tags: ['Biking', 'Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 5,
            title: 'The Best Cycling Trails in California: Ride Your Way to Paradise',
            description: 'Explore the most scenic cycling trails in California, from coastal routes to mountain paths.',
            author: 'Sophia Lee',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'September 1, 2024',
            tags: ['Biking'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 6,
            title: 'Exploring the Countryside: A Weekend Biking Getaway',
            description: 'Join us for a delightful biking getaway in the countryside, complete with picturesque views and charming towns.',
            author: 'Jack Wilson',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'August 20, 2024',
            tags: ['Biking', 'Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
        
        // Treks
        {
            id: 7,
            title: 'The Ultimate Himalayan Trek: A Guide to Unforgettable Treks',
            description: 'Trekking through the Himalayas is not just a journey but a transformative experience for the soul.',
            author: 'Alicia Thompson',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'August 15, 2024',
            tags: ['Treks', 'Hiking'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 8,
            title: 'Inca Trail Trek: A Journey to Machu Picchu',
            description: 'Experience the awe of hiking the Inca Trail, leading to the breathtaking ruins of Machu Picchu.',
            author: 'Carlos Ramirez',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'July 25, 2024',
            tags: ['Treks', 'Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 9,
            title: 'The Pacific Crest Trail: A Hiker’s Dream',
            description: 'Embark on an epic adventure along the Pacific Crest Trail, where stunning vistas await at every turn.',
            author: 'Sarah Johnson',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'June 10, 2024',
            tags: ['Treks', 'Hiking'],
            imageUrl: IMAGES.featuredPostImg,
        },
        
        // Thrills
        {
            id: 10,
            title: 'Skydiving Over the Grand Canyon: A Thrill-Seeker’s Paradise',
            description: 'Feel the rush of skydiving over the Grand Canyon, one of the most breathtaking landscapes on Earth.',
            author: 'Liam Smith',
            date: 'October 10, 2024',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            tags: ['Thrills', 'Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 11,
            title: 'Bungee Jumping in New Zealand: The Ultimate Adrenaline Rush',
            description: 'Experience the thrill of bungee jumping in New Zealand, a must for any adrenaline junkie.',
            author: 'Emma Thompson',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'September 5, 2024',
            tags: ['Thrills'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 12,
            title: 'Whitewater Rafting in Colorado: A Heart-Pounding Adventure',
            description: 'Join us for an exhilarating whitewater rafting adventure down Colorado’s most thrilling rivers.',
            author: 'Noah Johnson',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'August 22, 2024',
            tags: ['Thrills', 'Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
    
        // Hiking
        {
            id: 13,
            title: 'The Best Hiking Trails in National Parks',
            description: 'Discover the best hiking trails in America’s national parks and enjoy nature at its finest.',
            author: 'Mia Davis',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'July 12, 2024',
            tags: ['Hiking', 'Adventures'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 14,
            title: 'Exploring the Appalachian Trail: A Hiker’s Journey',
            description: 'Join me on a journey along the Appalachian Trail, a beautiful and diverse hiking experience.',
            author: 'Isabella Martinez',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'June 30, 2024',
            tags: ['Hiking', 'Treks'],
            imageUrl: IMAGES.featuredPostImg,
        },
        {
            id: 15,
            title: 'Top 10 Scenic Hiking Routes in Europe',
            description: 'Explore the top scenic hiking routes in Europe, where breathtaking views and rich history await.',
            author: 'Oliver Taylor',
            authorImage : 'https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            date: 'May 15, 2024',
            tags: ['Hiking'],
            imageUrl: IMAGES.featuredPostImg,
        },
    ];
    
    return(
        <>
            <CategoryHero title="Travel" Products={Products} heroImage={IMAGES.travelHeroImg}  />
            <ExploreBlogs tags={tags} blogs={blogs} />
            <NewsletterSubscribe/>
        </>
    );
}