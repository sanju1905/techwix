import React, { useEffect, useState } from 'react';

import place1 from '../public/img/TECW0001.jpg';
import place2 from '../public/img/TECW0101.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            src: place1,
            alt: "Slide 1",
            description: "Cooking Blog Website: Displays unique recipes collected from users and features food channels. Live link: http://cookingblog-sanju.onrender.com/",
        },
        {
            src: place2,
            alt: "Slide 2",
            description: "Online Labs for jntuacep.ac.in: A website that generates unique credentials for online lab exams, providing users with specific questions.",
        },
        // You can add more slides here
        {
            src: place2,
            alt: "Slide 3",
            description: "Resource Management: Collects materials from users and displays them, allowing downloads if needed.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Slide changes every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [slides.length]);

    return (
        <>
            <div className='flex flex-col items-center justify-center py-10' id='testimonals'>
                <h1 className='m-4 text-3xl font-bold text-blue-500'>Testimonals</h1>
                <div className="relative w-[85%]" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-80">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                                data-carousel-item
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="hidden block object-cover w-full h-full md:block"
                                />
                                <div className="absolute left-0 w-full p-4 text-2xl font-bold bg-white bg-opacity-50 bottom-5 text-dark ">
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                            
                        ))}
                    </div>

                    {/* Slider indicators */}
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                                aria-current={currentSlide === index}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
