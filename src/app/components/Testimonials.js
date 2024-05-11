
"use client"
import Image from 'next/image';
import { useState } from 'react';
import latest1 from '../../public/latest1.png';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text:
        "Working with Sharva Digital Agency was a game-changer for us. Their expertise in digital marketing made our brand stand out in a crowded marketplace. We saw a significant increase in our online visibility and conversion rates.",
      image: latest1,
    },
    // {
    //   text:
    //     "Sharva Digital Agency's team exceeded our expectations. Their creative approach and attention to detail helped us achieve remarkable results in a short time. We highly recommend their services to anyone looking to grow their business.",
    //   image: latest2,
    // },
    // {
    //   text:
    //     "We are thrilled with the results from Sharva Digital Agency. Their strategic insights and proactive approach have been instrumental in our online success. Partnering with them was one of the best decisions we made for our company.",
    //   image: latest3,
    // },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    clearTimeout(timer);
    setTimer(setTimeout(nextSlide, 2000)); // Reset timer for next slide
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // State for the timer
  const [timer, setTimer] = useState(null);

  // Set initial timer on component mount
  // useEffect(() => {
  //   const timerId = setInterval(nextSlide, 2000);

  //   // Store the timer ID in state
  //   setTimer(timerId);

  //   // Clean up function to clear the timer on component unmount
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-[24px] lg:text-[40px] text-center font-[700]">Testimonials</h2>
      <p className="text-center lg:text-[18px] text-[14px] text-[#00715C] font-[300]">
        Happy Customers
      </p>
      <div className="lg:flex justify-between w-full pt-6">
        <div className="lg:w-[50%] p-[15px] flex justify-center items-center">
          <p className="lg:text-[22px] font-[400]">{testimonials[activeIndex].text}</p>
        </div>
        <div className="flex justify-end lg:w-[48%] pt-6">
          <div className="lg:w-[70%] p-[15px] flex justify-center lg:items-center items-start">
            <Image src={testimonials[activeIndex].image} alt="img" />
          </div>
        </div>
      </div>
      {/* <div className="flex lg:justify-start justify-center mt-8 lg:ml-[45px] pb-6">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`h-1 w-12 cursor-pointer rounded-md mt-[20px] bg-[#00715C] ml-3 ${
              activeIndex === index ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonials;
