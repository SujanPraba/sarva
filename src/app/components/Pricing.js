// components/PricingSection.js
"use client";
import Image from "next/image";
import { useState } from "react";
import basic from "../../public/basicPlan.svg";
import premium from "../../public/premiumPlan.svg";
import standard from "../../public/standardPlan.svg";

const Pricing = () => {
  const [billPlan, setBillPlan] = useState("monthly");

  const plans = [
    {
      img: basic,
      name: "Easy",
      discretion:
        "Billed annually 10% off.",
      price: {
        monthly:100,
        annually: 29 * 12 - 199,
      },
      features: ["Email Marketing Content", "Marketing Voice","OptimizeSEO"],
    },
    {
      img: standard,
      name: "Basic",
      discretion: "Billed annually 12% off.",
      price: {
        monthly: 200,
        annually: 59 * 12 - 100,
      },
      features: [
        "Email Marketing Content ",
        "Marketing Voice",
        "OptimizeSEO",
        "Consulting Video",
      ],
    },
    {
      img: premium,
      name: "Custom",
      discretion: "Billed annually 20% off.",
      price: {
        monthly: 400,
        annually: 139 * 12 - 100,
      },
      features: [
        "Email Marketing Content ",
        "Marketing Voiced",
        "OptimizeSEO",
        "Consulting Video",
        "Marketing Advertising"
      ],
    },
  ];

  return (
    <div className="container mx-auto antialiased text-gray-900 bg-white">
      <main className="mx-4 my-16">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span className="font-semibold">flexible</span> Pricing{" "}
            <span className="font-semibold">Plans</span>
          </h1>
          {/* <p className="text-sm font-normal text-gray-400">
            See below our main three plans for your business, for your startup and agency.
          </p>
          <p className="text-sm font-normal text-gray-400">
            It start from here! You can teach yourself what you really like.
          </p> */}
        </div>

        {/* Plan switch */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <span className="text-base font-medium">Monthly pricing</span>
          <button
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00715C]"
            onClick={() =>
              setBillPlan(billPlan === "monthly" ? "annually" : "monthly")
            }
          >
            <div className="w-16 h-8 transition bg-[#00715C] rounded-full shadow-md outline-none"></div>
            <div
              className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
                billPlan === "monthly" ? "translate-x-0" : "translate-x-8"
              }`}
            ></div>
          </button>
          <p className="text-base font-medium">
            Annual pricing{" "} <br></br>
            <span className="text-[#00715C]"> (save 10 - 20%)</span>
          </p>
        </div>

        {/* Plans */}
        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
          {plans.map((plan, index) => (
            <section
              key={index}
              className="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex-shrink-0 text-center">
                <div className="flex justify-center pb-8">
                  <Image src={plan.img} alt="img" />
                </div>
                <span
                  className={`text-4xl font-medium tracking-tight`}
                >
                  ₹
                  {billPlan == "monthly"
                    ? plan.price.monthly
                    : plan.price.annually}
                </span>
                <span className="text-gray-400">
                  {billPlan == "monthly" ? "/month" : "/year"}
                </span>
              </div>
              <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                {/* <h2 className="text-2xl font-normal">{plan.name}</h2> */}
                <p className="text-sm text-gray-400 text-center">{plan.discretion}</p>
              </div>
              <ul className="flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#FFD6B9]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex-shrink-0 pt-4">
                <button
                  className={`inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00715C] ${
                    plan.name === "Basic"
                      ? "bg-[#00715C] text-white hover:bg-[#00715C]"
                      : "hover:bg-[#00715C] hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;
