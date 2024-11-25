import { ICONS } from '@/public/assets';
import Image from 'next/image';

interface AdvertisementCardProps {
    description: string;
    buttonText: string;
}


const AdvertisementCard: React.FC<AdvertisementCardProps> = ({ description, buttonText }) => {
  return (
    <div className="bg-primary-65 md:bg-white flex flex-row md:flex-col gap-4 border border-primary-55 p-4 rounded-none md:rounded-2xl w-full md:w-[227px] h-fit xl:h-[374px] font-Inter">
      <Image src={ICONS.advertismentImage} alt="blog banner" className="hidden md:block"/>
      <h4 className="text-neutral-5 font-medium text-sm md:text-base max-w-[201px] md:max-w-full">{description}</h4>
      <button className='border border-primary-10 px-[15px] py-2 rounded-lg text-primary-10 font-medium leading-[22px]'>
        {buttonText}
      </button>
    </div>
  );
}



export default AdvertisementCard;