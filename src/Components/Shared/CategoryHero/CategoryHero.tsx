"use client"

interface CategoryHeroProps {
    title: string;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default CategoryHero;