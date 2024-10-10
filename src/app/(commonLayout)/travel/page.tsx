import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import CategoryHero from "@/Components/Shared/CategoryHero/CategoryHero";


export default function TravelPage() {
    const Products = {
        Product1 : {
            icon: 'travelIcon1',
            title: 'Explore the world',
            description: 'Join me as I share my travel adventures, from hidden gems to popular destinations.'
        },
        Product2 : {
            icon: 'travelIcon2',
            title: 'Backpack Suggestions',
            description: 'Discover simple and delightful recipes that bring warmth to your kitchen.'
        },
        Product3 : {
            icon: 'travelIcon3',
            title: 'Everyday Inspiration',
            description: 'Find tips and tricks for a balanced lifestyle full of joy and creativity'
        }
    }

    return(
        <>
            <CategoryHero title="Travel" Products={Products}  />
            <NewsletterSubscribe/>
        </>
    );
}