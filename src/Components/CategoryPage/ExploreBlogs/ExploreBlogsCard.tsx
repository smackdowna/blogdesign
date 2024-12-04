import Image, { StaticImageData } from "next/image";

type TExploreBlogsCardProps = {
  title: string;
  description: string;
  author: {
    _id: string;
    full_name: string;
  };
  date: string;
  tags: string[];
  imageUrl: string | StaticImageData;
};

const ExploreBlogsCard: React.FC<TExploreBlogsCardProps> = ({
  title,
  tags,
  description,
  imageUrl,
}) => {
  const htmlToPlainText = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const plainText = htmlToPlainText(description);

  return (
    <div className="font-Inter flex flex-col xl:flex-row gap-6 rounded-xl border border-neutral-30 p-6 w-full">
      {/* content */}
      <div className="w-full">
        <h1 className="text-black font-semibold leading-8 text-xl">{title}</h1>
        <p
          className="text-neutral-25 leading-5 mt-[10px]"
          dangerouslySetInnerHTML={{
            __html: `${plainText.slice(0, 500)}+ ...`,
          }}
        />

        <div className="flex items-center gap-4 mt-6">
          {tags?.map((tag) => (
            <div
              key={tag}
              className="bg-primary-60 text-black border border-neutral-30 rounded-lg px-3 h-9 flex items-center justify-center"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        className="rounded-xl w-full"
        width={497}
        height={310}
      />
    </div>
  );
};

export default ExploreBlogsCard;
