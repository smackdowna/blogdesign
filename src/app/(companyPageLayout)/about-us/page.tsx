
  
  const AboutUs = () => {
    const aboutUsContent = [
      {
        heading: "About Wizsip",
        description: [
          "Wizsip is our blog section which is more official with a personal tone. We blog on News, Technology, Health/Fitness, Travel, Politics, Business, Stock market, Entertainment and more. We're here to provide the best curated articles across all topics. We're a team of professionals who are dedicated to providing you with all the latest news and information on the go. We're committed to bringing you the most relevant and interesting headlines that are guaranteed to keep you up-to-date on the latest news.",
        ],
      },
      {
        heading: "The Wizsip offers a single destination for all your news needs.",
      },
      {
        heading: "Team",
        description: [
          "Our content is written by a team of experts who work around the clock to bring you a wide variety of topics from all over the world. We use a proprietary content writing tool that allows our writers to generate unique and engaging content in record time.",
          "Wizsip is the place to go for your daily dose of news, blogs, and other great content. It's everything you need to keep up to date on the news, health, technology, and travel industry.",
          "We have a group of top-notch bloggers who provide a wealth of information on a whole range of topics. Find out what's going on around the world while staying in your pajamas!"
        ],
      },
      {
        heading: "Health blog posts",
        description: [
          "Let's talk about your health",
"We provide unbiased information for all things pertaining to your health condition. Our writers are content professionals who will provide you with the latest information on medical topics that are trending in today's market. You'll get an honest opinion that you can trust because we're not paid by any company to give out our opinions – we're just here to help you out.",
        ],
      },
      {
        heading: "Travel blog posts",
        description: [
          "Find your next vacation spot with us! Wizsip is dedicated to providing the best tips on the web when it comes to finding your next vacation destination or booking a hotel! We've got all of our travel tips right here so you can find the best deals and get ahead of everyone else!",
        ],
      },
      {
        heading: "Technology blog posts",
        description: [
          "Some people say that technology is changing so fast that it is impossible to keep up with all the latest advances in the field. That's why we created Wizsip, an online resource where you can learn about everything from new technologies to how to use your computer more efficiently.",
        ],
      },
      {
        heading:
          "News blog",
        description: [
          "Our blog is the ultimate source of information about the world. From news to health, to technology, Wizsip is your go-to destination for all the latest updates.",
          "Best news, politics, and health blogs from around the web",
          "Get the latest news from the world of politics and health from our trusted political blog.",
        ],
      },
      {
        heading: "Insightful, honest, and timely",
        description: [
          "Our content is written by our team of writers to provide you with the top news stories from around the world. Our writers also include a diverse range of opinions and experiences, which allows us to offer a variety of insights into local and global events.",
        ],
      },
    ];
    return (
      <div className="">
  {aboutUsContent.map((section, index) => (
    <div key={index} className="mb-8">
      <h2 className="text-neutral-10 font-Inter text-xl md:text-[26px] font-bold mb-4">
        {section.heading}
      </h2>

      {section.description && section.description.length > 0 && (
        <div className="flex flex-col gap-3">
          {section.description.map((desc, index) => (
            <p key={index} className="text-neutral-500 font-medium leading-6">
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

    );
  };
  
  export default AboutUs;
  