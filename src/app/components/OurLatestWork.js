"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import latest1 from "../../public/latest1.png";
import latest2 from "../../public/latest2.png";
import latest3 from "../../public/latest3.png";

const OurLatestWork = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [cards] = useState([
    {
      id: 1,
      image: latest1,
      title: "Digital Dominance for zest.",
      description: "Elevating a traditional brand into the digital age: We executed a comprehensive digital transformation strategy, resulting in a 120% increase in online sales within six months."
    },
    {
      id: 2,
      image: latest2,
      title: "Social Buzz for Baba Startup",
      description: "Fostering a strong online presence: Our strategic social media campaigns garnered a 250% growth in social engagement and a 30% rise in brand awareness."
    },
    {
      id: 3,
      image: latest3,
      title: "Revamped Web Experience for DEF Corporation",
      description: "Bringing an outdated website back to life: A complete website redesign led to a 45% boost in user engagement and a 20% improvement in conversion rates."
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
          <p className="text-center font-[700] lg:text-[40px] text-[24px]">Our Latest Work</p>
          <p className="text-center font-[400] text-[#52525B] text-[14px] pt-2">
            Last Three works
          </p>
          <div className="lg:flex justify-between items-center pt-[30px] lg:pt-[60px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`lg:w-[25%] w-[80%] mx-auto shadow-2xl rounded-lg p-5 min-h-[400px] ${
                  activeButton === index ? 'scale-110 transition-all duration-500 latestIndex' : ''
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
      <div className="flex lg:justify-start justify-center mt-8 lg:ml-[45px] pb-6">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`h-1 w-12 cursor-pointer rounded-md mt-[20px] bg-[#FF6B00] ml-3 ${
              activeButton === index ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default OurLatestWork;
