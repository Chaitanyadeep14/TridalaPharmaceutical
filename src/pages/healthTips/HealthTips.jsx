import { fruitsData } from './../../constants/fruitsData';
import { exerciseData } from './../../constants/exerciseData';
import { useState, useEffect, useRef } from 'react';
import leaves from './../../assets/healthTips/leaves.svg';
import apple from './../../assets/healthTips/apple.png';
import exercise from './../../assets/healthTips/exercise.png';
import poster1 from './../../assets/TridalaBanners/HealthTips1.svg';
import poster2 from './../../assets/TridalaBanners/HealthTips2.png';
import poster3 from './../../assets/TridalaBanners/HealthTips3.svg';
import BannerCarousel from '../../components/BannerCarousel.jsx';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export default function HealthTips() {
  const [index, setIndex] = useState(new Date().getDate());
  const [isFruit, setIsFruit] = useState(true);
  const [boxContent, setBoxContent] = useState("");
  const divRef = useRef(null);
  const [Width, setWidth] = useState(0);
  const images = [poster1, poster2, poster3];

  useEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, [Width]);
  useEffect(() => {
    if (isFruit) {
      let content = (<div className={`bg-[#36A899C4] text-white rounded-2xl shadow md:p-4 xl:p-8 flex flex-col md:flex-row items-center md:items-start w-[${Width}px]`}>
        <div className="lg:w-1/2 m-4 lg:mb-0">
          <h3 className="text-xl md:text-2xl xl:text-4xl font-bold mb-4 xl:mx-10">Fruit of the day: {fruitsData[index].name}</h3>
          <ul className="list-disc list-inside text-lg md:text-xl xl:text-2xl xl:py-5 xl:px-8">
            <li>Nutritional Values ({fruitsData[index].nutritionalValues.weight}):</li>
            <li>Calories: {fruitsData[index].nutritionalValues.calories}</li>
            {fruitsData[index].nutritionalValues.extras.map((item, ind) => (<><li key={ind}>{item}</li></>))}
            <li className="flex items-start">
              <span className="mr-2 font-bold">Key Benefits:</span>
              <ul className=" ml-4">
                {fruitsData[index].keyBenefits.map((item, idx) => (
                  <li key={idx}>{item},</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={fruitsData[index].img}
            alt="img"
            className="rounded-lg shadow-md md:w-80 md:h-80 xl:w-[530px] xl:h-[400px]"
          />
        </div>
      </div>);
      setBoxContent(content);
    } else {
      let content = (<div className={`bg-[#36A899C4] text-white rounded-2xl shadow md:p-4 xl:p-8 flex flex-col md:flex-row items-center md:items-start w-[${Width}px]`}>
        <div className="lg:w-1/2 m-4 lg:mb-0">
          <h3 className="text-xl md:text-2xl xl:text-4xl font-bold mb-4 xl:mx-10">Exercise of the day: {exerciseData[index].name}</h3>
          <ul className="list-disc text-lg md:text-xl px-4 xl:text-2xl xl:py-5 xl:px-8">
            {exerciseData[index].todo.map((item, ind) => (<><li key={ind}>{item}</li></>))}
          </ul>
          <div className="mx-6 font-bold  text-lg md:text-xl xl:text-2xl">Benefits</div>
          <ul className="list-decimal text-lg md:text-xl px-4 xl:text-2xl xl:py-5 xl:px-8">
            {exerciseData[index].benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={exerciseData[index].img}
            alt="img"
            className="rounded-lg shadow-md md:w-80 md:h-80 xl:w-[552px] xl:h-[420px]"
          />
        </div>
      </div>);
      setBoxContent(content);
    }
  }, [index, isFruit, Width]);

  return (
    <>
      <div className='bg-[#E1EFF5]'>
        <BannerCarousel images={images} />
      </div>
      <FloatingWhatsApp phoneNumber="+918088113599" accountName="Tridala Pharma" />
      <div className="font-lato bg-[#E1EFF5] p-8 xl:p-16">
        <div className='bg-[#E1EFF5]  flex-col items-center justify-between xl:mx-40 my-10 space-y-4 md:space-y-0' ref={divRef}>
          <div className='flex flex-col md:flex-row items-center justify-between my-10 space-y-4 md:space-y-0'>
            <div className="bg-white rounded-2xl shadow p-6 w-72 h-68 xl:w-[400px]">
              <h2 className="text-xl font-bold text-center mb-4 xl:mb-8">
                30 Days Challenge
              </h2>
              <div className="grid grid-cols-7 gap-2 xl:gap-4 text-center text-sm font-semibold text-gray-600">
                {[...Array(31)].map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)}>
                    <div
                      className={`p-1 xl:p-2 md:w-10 xl:h-10 flex items-center justify-center ${i === index
                        ? "bg-[#22c2b2] text-white rounded-full"
                        : "hover:bg-gray-200 rounded"
                        }`}
                    >
                      {i + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className={`relative ${isFruit ? `bg-[#88F0E2]` : `bg-white`} rounded-2xl shadow p-6 w-52 h-52 xl:h-[300px] xl:w-[300px] flex flex-col items-center`}>
              <div className="absolute top-0 right-0 rotate-180">
                <img src={leaves} alt="Decorative Leaves" />
              </div>
              <button onClick={() => setIsFruit(true)}>
                <div className="bg-[#23C5B5] p-4 h-32 w-32 xl:h-56 xl:w-56 rounded-full flex items-center justify-center">
                  <img src={apple} className="p-2" alt="Apple Icon" />
                </div>
                <h3 className="mt-4 text-lg font-bold">NUTRITION</h3>
              </button>
              <div className="absolute left-0 bottom-0">
                <img src={leaves} alt="Decorative Leaves" />
              </div>
            </div>

            {/* Exercise Card */}
            <div className={`relative ${isFruit ? `bg-white` : `bg-[#88F0E2]`} rounded-2xl shadow p-6 w-52 h-52 xl:h-[300px] xl:w-[300px] flex flex-col items-center`}>
              <div className="absolute top-0 left-0 rotate-90">
                <img src={leaves} alt="Decorative Leaves" />
              </div>
              <button onClick={() => setIsFruit(false)}>
                <div className="h-36 w-36 xl:h-60 xl:w-56 rounded-full flex items-center justify-center">
                  <img src={exercise} alt="Exercise Icon" />
                </div>
                <h3 className="text-lg font-bold">Exercise</h3>
              </button>
              <div className="absolute right-0 bottom-0 -rotate-90">
                <img src={leaves} alt="Decorative Leaves" />
              </div>
            </div>
          </div>
          <div>
            {boxContent}
          </div>
        </div>
      </div>
    </>
  );
}