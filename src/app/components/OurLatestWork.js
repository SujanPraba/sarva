"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import latest2 from "../../public/our-latest/1.png";
import latest1 from "../../public/our-latest/2.png";
import latest3 from "../../public/our-latest/3.png";


const OurLatestWork = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [cards] = useState([
    {
      id: 1,
      image: latest1,
      title: "Boost Your Online Presence",
      description: "Our SEO Strategy will Improve your website’s visibility in search engine result."
    },
    {
      id: 2,
      image: latest2,
      title: "Drive Targeted Traffic",
      description: "With our PPC campaigns, You can attract quality leads o your websites."
    },
    {
      id: 3,
      image: latest3,
      title: "Engage Your Audience",
      description: "Our social media management service will help you connect with targeted Customers."
    },
  ]);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeButton + 1) % cards.length;
      setActiveButton(nextIndex);
    }, 2000); // Change button every 5 seconds

    return () => clearInterval(timer);
  }, [activeButton, cards.length]);

  return (
    <>
      <div className="w-[82%] mx-auto">
        <div>
        <p className="text-center font-[400] text-[#00715C] text-[20px] pt-2">
        Transform Your Business with
          </p>
          <p className="text-center font-[700] lg:text-[40px] text-[24px]">Our Marketing Services</p>

          <div className="lg:flex justify-between items-center pt-[30px] lg:pt-[60px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`lg:w-[25%] w-[80%] mx-auto shadow-2xl rounded-lg p-5 min-h-[360px] ${
                  activeButton === index ? '' : ''
                }`}
              >
                <div className="flex lg:block justify-center">
                <Image src={card.image} alt="img" />
                </div>
                <p className="text-[20px] text-[700] pt-3">{card.title}</p>
                <p className="text-[13px] font-[400] text-[#191D23] pt-4">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex lg:justify-start justify-center mt-8 lg:ml-[45px] pb-6">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`h-1 w-12 cursor-pointer rounded-md mt-[20px] bg-[#00715C] ml-3 ${
              activeButton === index ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div> */}
    </>
  );
};

export default OurLatestWork;
