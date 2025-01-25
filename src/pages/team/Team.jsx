/* eslint-disable react/jsx-key */
import founder from './../../assets/people/founder.png';
import hrf from './../../assets/people/hrf.png';
import ceo from './../../assets/people/ceo.png';
import vp from './../../assets/people/vp.png';
import marketing from './../../assets/people/marketing.png';
import chairperson from './../../assets/people/chairperson.png';
import diabetesSpecialist from "./../../assets/people/diabetesSpecialist.png"
import surgeon from "./../../assets/people/surgeon.png"
import Pediatrician from "./../../assets/people/Pediatrician.png"
import surgicalOncologist from "./../../assets/people/surgicalOncologist.png"
import BannerCarousel from '../../components/BannerCarousel.jsx';
import Journey1 from './../../assets/TridalaBanners/Journey1.svg';
import Journey2 from './../../assets/TridalaBanners/Journey2.svg';
import Journey3 from './../../assets/TridalaBanners/Journey3.svg';
import Journey4 from './../../assets/TridalaBanners/Journey4.svg';
import PersonCard from './PersonCard';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Team() {
  const images = [Journey2, Journey1, Journey3, Journey4];
  const personsRow1 = [
    {
      img: chairperson,
      description: "Usha ensures we stay true to our mission, overseeing strategy and governance with a focus on ethics, excellence, and delivering affordable, quality medication",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: hrf,
      description: "Monika oversees HR and Finance, driving key operations that contribute significantly to Tridala's growth and success",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: marketing,
      description: "Kushala leads our marketing efforts, balancing strategy and compliance to create impactful, results-driven campaigns.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
  ];
  const personsRow2 = [
    {
      img: ceo,
      description: "Graduated from Bangalore Medical College and then completed M.D in pediatrics at one of the top most institute of post graduate education and training centre in India.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: vp,
      description: "With 15+ years in pharma sales and marketing, including roles at Empire Venson and Hetero Healthcare, Shantha drives our business growth",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
  ]
  const advisoryTeam = [
    {
      img: Pediatrician,
      name: "DR. Narasimppa  GM",
      role: "PEDIATRICIAN",
      description: "Dr. Narasimhappa advises Tridala to ensure its medicines meet the critical needs of pediatric care, focusing on effective, safe, and accessible solutions for children.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: diabetesSpecialist,
      name: "Dr. Ambrish C",
      role: "DIABETES CARE SPECIALIST",
      description: "Dr. Ambrish C believes Tridala's mission aligns with today's urgent need for affordable diabetes care, making quality treatment accessible to all patients.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: surgicalOncologist,
      name: "DR. Girish G",
      role: "SURGICAL ONCOLOGIST",
      description: "Dr. Girish, MBBS, MS, MCh, is an experienced surgical oncologist specializing in laparoscopic and robotic surgeries, offering over 14 years of expert, compassionate care to cancer patients.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: surgeon,
      name: "DR. Arun Nayak",
      role: "GENERAL SURGEON",
      description: "Dr. Arun Nayak joined the advisory board to guide Tridala in delivering surgical-grade medicines, driven by his passion for accessible high-quality healthcare.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    }
  ];
  return (
    <>
      <div className="bg-slate-200 font-lato">
        <div>
          <BannerCarousel images={images} />
        </div>
        <FloatingWhatsApp phoneNumber="+918088113599" accountName="Tridala Pharma" /> 
        <div className="flex flex-col text-center space-y-3 md:space-y-10 xl:space-y-15 m-5 md:m-10 xl:m-15">
          <div className='text-[#189D90] text-2xl md:text-5xl xl:text-7xl font-bold my-10 md:my-20'>MEET OUR TEAM</div>
          <div className="text-xl font-semibold md:text-3xl xl:text-5xl my-10 md:my-16 xl:my-20">Our Founder</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around space-y-10 md:space-y-0 md:space-x-10 xl:space-x-20 p-5 md:p-10 xl:mx-28">
          <img
            className="h-60 w-auto md:h-96 md:w-auto xl:h-[480px] xl:w-auto object-contain"
            src={founder}
            alt="Profile"
          />
          <div className="text-[#189D90] text-center md:text-left text-sm font-medium md:text-xl xl:text-2xl xl:leading-10 space-y-4 xl:space-y-6">
            <div className="text-justify xl:leading-10 ">
              Kemparju. K was born into a farming family. He completed his education at a government school and developed a long-term vision to contribute to society through a multidisciplinary approach. He began his career as a small entrepreneur across various fields, achieving success through his dedication, discipline, and devotion.
            </div>
            <div className="text-justify xl:leading-10 ">
              His commitment to social service led him to enter the political arena. He realised that the community needed accessibility to affordable healthcare. And decided to establish a framework of Trusted, Revolutionary, Innovative, and Defined Affordability in collaboration with a league of esteemed pharmaceutical and medical practitioners. That was when Tridala Pharmaceutical was born.
            </div>
          </div>
        </div>

        <div className='flex justify-center p-5 md:p-10  my-10 md:my-16 xl:my-20'>
          <div className='text-3xl xl:text-5xl font-semibold'>Board of Directors</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:space-x-28 xl:space-x-40 items-center space-y-4 md:space-y-0 p-2 md:py-10">
          {personsRow1.map((person) => {
            return (<PersonCard person={person} />);
          })}
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-28 xl:space-x-40 items-center space-y-4 md:space-y-0 p-2 md:py-10">
          {personsRow2.map((person) => {
            return (<PersonCard person={person} />);
          })}
        </div>
        <div className='flex flex-col text-center items-center justify-center py-5 pt-10 md:pt-16 xl:pt-20 pb-24'>
          <div className='text-3xl xl:text-5xl font-semibold py-10 md:py-16 xl:py-24 '>Advisory Team</div>
          <div className='flex flex-col md:flex-row flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 xl:space-x-6'>
            {advisoryTeam.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col bg-[#3DAAA5E3] rounded-3xl w-52 md:w-52 xl:w-80 h-[460px] md:h-[500px] xl:h-[620px] mx-2 ${index === 0 ? 'mt-0' : 'mt-2'
                  }`}
              >
                <img src={item.img} className='h-52 md:h-64 xl:h-[350px]' alt="" />
                <div className='text-white font-semibold mt-2 md:text-xl xl:text-2xl'>{item.name}</div>
                <div className='mt-2 md:text-sm xl:text-normal'>{item.role}</div>
                <div className='md:h-44 xl:h-48'>
                  <div className='text-center text-sm md:text-normal xl:text-lg text-white p-3 md:px-3 xl:px-5'>{item.description}</div>
                </div>
                {/* <div className=" flex justify-center space-x-6 xl:space-x-8 pb-2  md:text-xl xl:text-2xl">
                  <a href={item.x} className="text-white hover:text-gray-200"><i className="fab fa-x-twitter"></i></a>
                  <a href={item.instagram} className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                  <a href={item.facebook} className="text-white hover:text-gray-200"><i className="fab fa-facebook"></i></a>
                  <a href={item.linkedin} className="text-white hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}