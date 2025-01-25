import { useEffect, useState, useRef } from 'react';
import logo from './../../assets/logo.png';
import "./Ladder.css";

const Ladder = () => {
    const ladder = [
        { text: 'TRUST', color: 'from-[#1B7066] to-[#62B2AC]' },
        { text: 'REVOLUTION', color: 'from-[#00917F] to-[#68A946]' },
        { text: 'INNOVATIVE', color: 'from-[#1B7066] to-[#62B2AC]' },
        { text: 'DEFINED', color: 'from-[#00917F] to-[#68A946]' },
        { text: 'AFFORDABLE', color: 'from-[#1B7066] to-[#62B2AC]' },
        { text: 'LEAGUE', color: 'from-[#00917F] to-[#68A946]' },
        { text: 'AID', color: 'from-[#1B7066] to-[#62B2AC]' },
    ];

    const [spacing, setSpacing] = useState({ top: 30, right: 15 });
    // const [visibleSteps, setVisibleSteps] = useState(Array(ladder.length).fill(false));
    const stepsRef = useRef([]);

    useEffect(() => {
        const updateSpacing = () => {
            const rootStyles = getComputedStyle(document.documentElement);
            const topSpacing = parseFloat(rootStyles.getPropertyValue('--top-spacing').trim());
            const rightSpacing = parseFloat(rootStyles.getPropertyValue('--right-spacing').trim());
            setSpacing({ top: topSpacing, right: rightSpacing });
        };

        updateSpacing();
        window.addEventListener('resize', updateSpacing);
        // const observer = new IntersectionObserver(
        //     (entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 const index = stepsRef.current.indexOf(entry.target);
        //                 setVisibleSteps((prev) => {
        //                     const updated = [...prev];
        //                     updated[index] = true;
        //                     return updated;
        //                 });
        //             }
        //         });
        //     },
        //     { threshold: 0.5 }
        // );
        // stepsRef.current.forEach((step) => observer.observe(step));
        return () => window.removeEventListener('resize', updateSpacing);
    }, []);

    return (
        <div className="font-lato bg-gradient-to-b from-[#ffffff] h-screen md:h-[calc(100vh-500px)] xl:min-h-screen to-[#339C91] flex mt-10 md:mt-20 justify-center px-4">
            <div className="text-center max-w-7xl w-full">
                {/* Logo and Description */}
                <div className="my-4 max-w-md">
                    <img src={logo} className="h-20 md:h-32 xl:h-40 mx-auto" alt="Tridala Pharmaceuticals Logo" />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="text-black md:text-lg xl:text-xl font-medium text-justify p-5 md:w-[50%]">
                        Tridala Pharmaceuticals is dedicated to transforming healthcare globally through innovative research and reliable
                        distribution of affordable pharma - Nutraceutical products of everyday essential to advanced treatments, ensuring
                        the highest standards of quality, safety & efficacy.
                    </div>
                    {/* Staircase Design */}
                    <div className="relative flex flex-col md:w-[50%] items-center md:items-end md:justify-center p-5 md:mt-5">
                        {ladder.map((step, index) => (
                            <div
                                key={index}
                                ref={(el) => stepsRef.current[index] = el}
                                className={`absolute w-full max-w-[230px] h-10 md:max-w-[350px] md:h-12 xl:max-w-[450px] xl:h-16 bg-gradient-to-r ${step.color} flex  px-5 xl:px-8 justify-start items-center text-white text-center font-bold rounded-lg md:rounded-xl shadow-xl border-[1px] md:border-2 md:text-2xl xl:text-4xl`}
                                style={{
                                    top: `${index * spacing.top}px`,
                                    right: `${index * spacing.right}px`,
                                    // opacity: visibleSteps[index] ? 1 : 0,
                                    // transform: visibleSteps[index] ? 'translateX(0)' : 'translateX(100%)',
                                    // transition: `transform 0.5s ease-out, opacity 0.5s ease-out ${index * 0.5}s`,
                                }}
                            >
                                {step.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ladder;