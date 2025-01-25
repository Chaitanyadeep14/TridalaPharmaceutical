/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import image1 from "./../../assets/homeProducts/img1.svg"
import img2 from "./../../assets/homeProducts/img2b.png"
import image3 from "./../../assets/homeProducts/img3.svg"
import imag from "./../../assets/homeProducts/6.png"
import imagt from "./../../assets/homeProducts/triagel.png"
import image5 from "./../../assets/homeProducts/img5.svg"
import roar from "./../../assets/homeProducts/8.png"
import image9 from "./../../assets/homeProducts/img9.png"
import image10 from "./../../assets/homeProducts/Tritussplus.png"
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";


export default function OurProducts() {
    const images = [image5, image9, image3, imag, roar, image1, imagt, img2, image10];
    return (
        <>
            <div className="md:hidden">
                <ImageSlider1 images={images} />
            </div>
            <div className="hidden md:block xl:hidden">
                <ImageSlider2 images={images} />
            </div>
            <div className="hidden xl:block">
                <ImageSlider3 images={images} />
            </div>
            {/* <ThreeImageSlider images={images} /> */}
        </>
    );
}
function CustomPrevArrow(props) {
    const { onClick, size } = props;
    return (
        <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#005239] rounded-full w-8 h-8 flex items-center justify-center z-10"
            onClick={onClick}
        >
            <IoIosArrowBack size={size} />
        </button>
    );
}

function CustomNextArrow(props) {
    const { onClick, size } = props;
    return (
        <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#005239] rounded-full w-8 h-8 flex items-center justify-center z-10"
            onClick={onClick}
        >
            <IoIosArrowForward size={size} />
        </button>
    );
}
function ImageSlider1({ images }) {
    let navigate = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <CustomNextArrow size={30} />,
        prevArrow: <CustomPrevArrow size={30} />,
    };

    return (
        <div className="overflow-hidden"> {/* Ensure full-width */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex items-center px-8">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="h-36 w-full"
                            onClick={() => { navigate('Products'); }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
function ImageSlider2({ images }) {
    let navigate = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <CustomNextArrow size={60} />,
        prevArrow: <CustomPrevArrow size={60} />,
    };

    return (
        <div className="overflow-hidden"> {/* Ensure full-width */}
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex items-center px-5">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="h-44 w-full"
                            onClick={() => { navigate('Products'); }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function ImageSlider3({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current active slide
    const navigate = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <CustomNextArrow size={80} />,
        prevArrow: <CustomPrevArrow size={80} />,
        centerMode: true, // Enables centering
        centerPadding: '0px', // Removes padding around centered image
        afterChange: (index) => setCurrentSlide(index), // Updates current slide index
    };

    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                {images.map((image, index) => {
                    const isCenter = index === currentSlide; // Check if the current image is in the center
                    return (
                        <div
                            key={index}
                            className="grid place-content-center place-items-center transition-all duration-300 ease-in-out h-60" 
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`object-fill ${
                                    isCenter ? 'h-60 w-full' : 'h-48 w-80 opacity-70'
                                }`} 
                                onClick={() => {
                                    navigate('Products');
                                }}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}