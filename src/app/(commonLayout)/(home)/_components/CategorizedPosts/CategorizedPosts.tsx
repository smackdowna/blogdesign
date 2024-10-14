import Container from '@/Components/Container/Container';
import BlogCard from '@/Components/Shared/BlogCard/BlogCard';
import Heading from '@/Components/Shared/Heading/Heading';
import React from 'react';
import { TCategorySection } from '../../page';

interface CategorizedPostsProps {
  section: TCategorySection;
}

const CategorizedPosts: React.FC<CategorizedPostsProps> = ({ section }) => {
  return (
        <Container>
      <div className="flex flex-col gap-[15px]">
        <Heading
          title={section.sectionHeading}
          isBordervisible={section.isBordervisible}
          isLinkAvailable={section.isLinkAvailable}
          path = {section.path}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
          {section.data.map((content, index) => (
            <BlogCard
              key={index}
              title={content.title}
              description={content.description}
              author={content.author}
              date={content.date}
              imageUrl={content.imageUrl}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategorizedPosts;
