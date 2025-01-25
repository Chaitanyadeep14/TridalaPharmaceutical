import OurStory from './OurStory.jsx';
import Ladder from './Ladder.jsx';
import left from './../../assets/icons/missionleft.svg';
import right from './../../assets/icons/missionright.svg';
import BannerCarousel from '../../components/BannerCarousel.jsx';
import Purpose1 from './../../assets/TridalaBanners/Purpose1.svg';
import Purpose2 from './../../assets/TridalaBanners/Purpose2.svg';
import Purpose3 from './../../assets/TridalaBanners/Purpose3.svg';
import Purpose4 from './../../assets/TridalaBanners/Purpose4.svg';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Purpose() {
  const images = [Purpose1, Purpose2, Purpose3, Purpose4];
  return (
    <>
      <div className='font-lato'>
        <BannerCarousel images={images} />
      </div>
      <FloatingWhatsApp phoneNumber="+918088113599" accountName="Tridala Pharma" />
      <OurStory />
      <Ladder />
      <div className='font-lato flex flex-col text-center pt-5 bg-slate-200 items-center pb-10 md:pb-20 xl:pb-40'>
        <div className='flex justify-center items-center py-10 xl:py-16 space-x-3'>
          <img src={left} className='h-10 md:h-12 xl:h-16' alt="" />
          <div className='text-2xl md:text-3xl xl:text-5xl font-bold text-[#329284] my-4'>MISSION & VALUES</div>
          <img src={right} className='h-10 md:h-12 xl:h-16' alt="" />
        </div>
        <div className="text-sm md:text-xl xl:text-2xl text-justify my-5 xl:my-10 mx-10 md:mx-20 xl:mx-60 text-[#329284] xl:w-[1100px] leading-tight md:leading-tight xl:leading-tight">Tridala Pharmaceuticals is dedicated to transforming healthcare globally through innovative research and reliable distribution of affordable medications. Our state-of-the-art facilities and experienced team enable us to produce a wide range of pharmaceuticals, from everyday essentials to advanced treatments, all designed to meet the highest standards of quality. We maintain strong supply chain partnerships to ensure the consistent availability of our products, empowering healthcare providers to deliver effective care without compromising on affordability.</div>
        <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center">
          <div className="flex flex-col border-2 p-2 my-4 mx-3 py-4 md:mx-8 md:px-4 xl:px-8 rounded-2xl w-60 md:w-80 md:h-[260px] xl:w-[500px] xl:h-[340px] space-y-5 bg-white shadow-xl">
            <div className="text-[#3EB2A2] text-xl md:text-2xl xl:text-4xl font-semibold">Our Vision</div>
            <div className="text-[#3EB2A2] text-center text-sm md:text-l xl:text-2xl leading-tight md:leading-tight xl:leading-tight">Our vision is to be the world&apos;s trusted provider of innovative, high-quality, and affordable healthcare solutions, empowering hospitals and clinics to enhance patient outcomes across the nation.</div>
          </div>
          <div className="flex flex-col border-2 p-2 my-4 mx-3 py-4 md:mx-8 md:px-4 xl:px-8 rounded-2xl w-60 md:w-80 md:h-[260px]  xl:w-[500px] xl:h-[340px] space-y-5 bg-white shadow-xl">
            <div className="text-[#3EB2A2] text-xl md:text-2xl xl:text-4xl font-semibold">Our Commitment</div>
            <div className="text-[#3EB2A2] text-center text-sm md:text-l xl:text-2xl leading-tight md:leading-tight xl:leading-tight">We are committed to providing affordable healthcare solutions that empower healthcare providers and improve patient lives. Every product undergoes rigorous quality assurance, guaranteeing safety and efficacy while remaining cost-effective.</div>
          </div>
        </div>
      </div>
    </>
  )
}
