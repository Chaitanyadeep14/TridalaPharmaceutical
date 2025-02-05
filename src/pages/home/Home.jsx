import poster1 from './../../assets/TridalaBanners/Home1.svg';
import poster2 from './../../assets/TridalaBanners/Home2.svg';
import poster4 from './../../assets/TridalaBanners/Home4.svg';
import poster5 from './../../assets/TridalaBanners/Home5.svg';
import poster6 from './../../assets/TridalaBanners/Home6.svg';
import poster7 from './../../assets/TridalaBanners/Home7.svg';
import poster8 from './../../assets/TridalaBanners/Home8.svg';
import poster9 from './../../assets/TridalaBanners/Home9.svg';
import poster10 from './../../assets/TridalaBanners/Home10.svg';
import homePageVideo from './../../assets/homePageVideo.mp4';
import MissionValues from './MissionValues.jsx';
import OurProducts from './OurProducts.jsx';
import { useNavigate } from "react-router-dom";
import tablets from "./../../assets/tablet.png"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import BannerCarousel from '../../components/BannerCarousel.jsx';
import { TbHtml } from 'react-icons/tb';

const Home = () => {
    let navigate = useNavigate();
    const images = [poster1, poster2,poster4,poster5,poster6,poster7,poster8,poster9,poster10];
    return (
        <>
            <div className="font-lato w-full xl:h-[calc(100vh-80px)] bg-slate-200 flex flex-col justify-center text-center relative">
                <video
                    className="absolute top-0 left-0 w-full h-auto xl:h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src={homePageVideo} type="video/mp4" />
                </video>
                <FloatingWhatsApp phoneNumber="+918088113599" accountName="Tridala Pharma" />
            </div>
            <div className='bg-slate-200 flex flex-col justify-center text-center pt-60 md:pt-[500px] xl:pt-40'>
                <div className='p-5 md:p-20'>
                    <BannerCarousel images={images} />
                </div>
                <div className='text-[#218275] font-semibold md:space-y-10 xl:space-y-16 my-10 md:my-20 xl:my-24'>
                    <div className='font-lato text-3xl md:text-4xl xl:text-5xl'>
                        <span>Our</span> <span className='text-[#ED6636]'>Products</span>
                    </div>
                    <OurProducts />
                </div>
                <MissionValues />

                <div className='md:hidden'>
                    <div className='flex m-5 mx-10 md:mx-0'>
                        <div className='flex flex-col justify-start text-start'>
                            <div className='text-[#25988B] text-4xl md:text-5xl xl:text-7xl font-extrabold'>OUR</div>
                            <div className='text-[#25988B] text-4xl md:text-5xl xl:text-7xl font-extrabold'>JOURNEY</div>
                        </div>
                        {/* <div className='font-extrabold'>Since <span className='text-[#25988B]'>2024</span></div> */}
                    </div>
                    <div className='text-[#25988B]  mx-10 my-5 xl:text-2xl text-left'>
                        Tridala Pharmaceuticals has been dedicated to improving global health through innovative pharmaceutical solutions. From breakthrough treatments to a commitment to sustainability
                    </div>
                    <img src={tablets} className='' alt="Medicine image" />
                    <div className='flex mx-10 my-5'>
                        <button onClick={() => { navigate('purpose'); }} className='bg-[#25988B] px-8 xl:px-12 py-3 xl:py-5 rounded-full text-white '>More</button>
                    </div>
                </div>
                <div className='hidden md:flex font-lato justify-around m-3 md:m-5 xl:m-10'>
                    <div className='flex flex-col p-5 md:w-[50%] justify-start text-start md:m-5 xl:m-10'>
                        <div className='text-[#25988B] text-4xl md:text-5xl xl:text-7xl font-extrabold'>OUR</div>
                        <div className='text-[#25988B] text-4xl md:text-5xl xl:text-7xl font-extrabold'>JOURNEY</div>
                        <div className='text-[#25988B]  text-left mt-8 xl:text-2xl leading-relaxed'>
                            Tridala Pharmaceuticals has been dedicated to improving global health through innovative pharmaceutical solutions. From breakthrough treatments to a commitment to sustainability
                        </div>
                        <div>
                            <button onClick={() => { navigate('purpose'); }} className='bg-[#25988B] px-8 xl:px-12 py-3 xl:py-5 rounded-full text-white mt-10 xl:mt-16'>More</button>
                        </div>
                    </div>
                    <div className='md:p-5 md:w-[50%] flex items-end flex-col m-5 xl:m-10'>
                        {/* <div className='flex justify-end mt-5'>
                            <div className='md:text-2xl xl:text-4xl font-bold'>Since <span className='text-[#25988B]'>2024</span></div>
                        </div> */}
                        <img src={tablets} className='h-72 xl:h-[550px] w-fit hidden md:block' alt="Medicine image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;