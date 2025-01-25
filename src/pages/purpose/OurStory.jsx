import image1 from './../../assets/ourStory/1.png';
import image2 from './../../assets/ourStory/2.png';
import image3 from './../../assets/ourStory/3.png';
import image4 from './../../assets/ourStory/4.png';
import image5 from './../../assets/ourStory/5.png';
import { useRef, useEffect, useState } from "react";

const OurStory = () => {
    const divRef = useRef(null); // Ref for the main content div
    const lastDivRef = useRef(null); // Ref for the last div
    const [height, setHeight] = useState(0);
    const [lastDivHeight, setLastDivHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.offsetHeight);
        }
        if (lastDivRef.current) {
            setLastDivHeight(lastDivRef.current.offsetHeight);
        }
    }, [height, lastDivHeight]);

    return (
        <div className="bg-[#189D90] font-lato p-6 flex flex-col md:items-start md:flex-row md:justify-around xl:p-16">
            <div className="text-justify md:w-[70%] p-5 xl:p-10">
                <div className="text-3xl md:text-6xl xl:text-9xl font-bold text-[#E47A4E]">OUR</div>
                <div className="text-3xl md:text-6xl xl:text-9xl font-bold text-[#E47A4E]">STORY</div>
                <div className="space-y-6 ml-4 xl:ml-10">
                    <div className="flex md:items-start justify-center items-center">
                        <div className={`w-4 bg-white`} style={{ height: `${height - (lastDivHeight / 2 - 45)}px` }}></div>
                        <div className='space-y-4 md:space-y-8 mt-14 md:mt-8 xl:mt-10' ref={divRef}>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 md:w-40 xl:w-[420px] h-0.5 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-2xl leading-tight md:leading-tight xl:leading-tight">Kemparaju. K was born into a farming family in Cheemasandra village, located near Bengaluru city. He completed his education at a government school and developed a long-term vision to contribute to society through a multidisciplinary approach. He began his career as a small entrepreneur across various fields, achieving success through his dedication, discipline, and devotion.</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 md:w-40 xl:w-[700px] h-0.5 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-2xl leading-tight md:leading-tight xl:leading-tight">His commitment to social service led him to enter the political arena. As he progressed from Gram Panchayat to the State Assembly, he encountered significant gaps in education, healthcare, rural development, and sanitation. Over the past 20 years, Kemparaju. K has played a pivotal role in modernizing numerous schools and hospitals to meet contemporary challenges and leverage available technology. He has expressed tremendous satisfaction in enhancing rural development through the improvement of infrastructure, including roads, drainage systems, drinking water supply, and various other amenities.</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 md:w-40 xl:w-[650px] h-0.5 bg-white"></div>
                                <div className="text-white text-sm md:text-xl xl:text-2xl leading-tight md:leading-tight xl:leading-tight">The global impact of the COVID-19 pandemic highlighted the critical shortcomings in the availability, accessibility, and affordability of healthcare. Kemparju. K focused on comprehensive rural development. This initiative has provided ambulance services and assistance to over 35,000 families. Additionally, he has extended support to bereaved individuals and provided food kits to more than 100,000 daily-wage families for nearly three months through a well-established trust “Swami Vivekananda Foundation” which was established by Kempraju K in 2015</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <div className="w-24 md:w-40 xl:w-[550px] h-0.5 bg-white"></div>
                                <div ref={lastDivRef} className="text-white text-sm md:text-xl xl:text-2xl leading-tight md:leading-tight xl:leading-tight">Recognizing that the community needed more than just food assistance, he and his family—serving as the board of directors—established a framework of Trusted, Revolutionary, Innovative, Defined Affordability in collaboration with a league of esteemed pharmaceutical and medical practitioners. This initiative aims to ensure the community has access to a wide range of affordable medicines, thereby addressing a critical need within the community.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8 md:my-20 flex flex-col justify-center items-center space-y-2 md:space-y-10">
                <img src={image1} alt="Story 1" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 p-2 transform md:rotate-[20deg]" />
                <img src={image2} alt="Story 2" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 p-2 transform md:rotate-[-20deg]" />
                <img src={image3} alt="Story 3" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 p-2 transform md:rotate-[10deg]" />
                <img src={image4} alt="Story 4" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 p-2 transform md:rotate-[-10deg]" />
                <img src={image5} alt="Story 5" className="w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 p-2 transform md:rotate-[20deg]" />
            </div>
        </div>
    );
};

export default OurStory;