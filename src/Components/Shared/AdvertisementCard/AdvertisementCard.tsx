import { ICONS } from '@/public/assets';
import Image from 'next/image';
import './advertisecard.css'

interface Advertisement {
    description: string;
    buttonText: string;
}

interface AdvertisementCardProps {
  advertisement: Advertisement;
}

const AdvertisementCard = ({ advertisement }: AdvertisementCardProps) => {
  return (
    <div className="advertisement-card">
      <Image src={ICONS.advertismentImage} alt="blog banner" />
      <h4>{advertisement.description}</h4>
      <button className='w-full border-[1.5px] px-[15px] py-[8px] border-[#524CC6] text-[#524CC6] rounded-md'>
        <h5 className='font-semibold'>{advertisement.buttonText}</h5>
      </button>
    </div>
  );
}



export default AdvertisementCard;