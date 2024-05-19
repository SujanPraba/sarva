"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const [clickedFeild, setClickedFeild] = useState("Home");
  const currentRoute = usePathname().split("#")[0];
  const [menuopen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuopen);
  };

  const handleClick = (section) => {
    setClickedFeild(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // window.location.reload();
    }
  };


  return (
    <nav className="w-full h-20 bg-[#202020] shadow-xl py-4">
      <div className="flex justify-between items-center h-full  xl:w-[82%] mx-auto py-2 w-[95%]">
        <div className="lg:px-8 px-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className={`${
                currentRoute === "/" ? "cursor-wait" : ""
              } cursor-pointer h-12 w-20`}
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="hidden lg:flex justify-center items-center">
            <Link href="#">
              <li
                onClick={() => handleClick("Home")}
                className={`${
                  clickedFeild === "Home"
                    ? "text-[white] border-b-[2px] border-[white]"
                    : "text-[#666666]"
                } mx-6`}
              >
                Home
              </li>
            </Link>
            <Link href="#aboutus">
              <li
                onClick={() => handleClick("courses")}
                className={`${
                  clickedFeild === "courses"
                    ? "text-[white] border-b-[2px] border-[white]"
                    : "text-[#666666]"
                } mx-6`}
              >
                About us
              </li>
            </Link>
            {/* <Link href="#training">

            <li
              onClick={() => handleClick("training")}
              className={`${
                clickedFeild === "training"
                  ? "text-[white] border-b-[2px] border-[white]"
                  : "text-[#666666]"
              } mx-6`}
            >
              Training Process
            </li>
            </Link> */}
            <Link href="#services">
            <li
              onClick={() => handleClick("placement")}
              className={`${
                clickedFeild === "placement"
                  ? "text-[white] border-b-[2px] border-[white]"
                  : "text-[#666666]"
              } mx-6`}
            >
              Services
            </li>
            </Link>
            <Link href="#projects">

            <li
              onClick={() => handleClick("testimonial")}
              className={`${
                clickedFeild === "testimonial"
                  ? "text-[white] border-b-[2px] border-[white]"
                  : "text-[#666666]"
              } mx-6`}
            >
              Projects
            </li>
            </Link>

          </ul>

        </div>
        <Link href="#contactus" className="ml-2 hidden lg:block">
              <p className="bg-[#00715C] text-[white] px-[15px] font-normal py-[8px] rounded-[4px] hover:p-[12px] transition-all duration-500">
                Contact us
              </p>
            </Link>
        <div className="lg:hidden cursor-pointer pl-20 lg:pr-0 pr-4" onClick={handleNav}>
          <AiOutlineMenu size={25} color="#ffffff"/>
        </div>
      </div>
      <div
        className={
          menuopen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#00715C] p-10 ease-in duration-500 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-out duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="">
            <Link href="/">
              <li className="py-4 hover:border-b">Home</li>
            </Link>
            <Link href="#aboutus">
              <li
              onClick={() => handleClick("courses")}
              className={`${
                clickedFeild === "courses"
                  ? "text-[white] border-b-[2px] border-[#white]"
                  : "text-[white]"
              }  py-4`}
              // className="py-4 hover:border-b"
              >About us</li>
            </Link>
            <Link href="#projects">
              <li
               onClick={() => handleClick("placement")}
               className={`${
                 clickedFeild === "placement"
                   ? "text-[white] border-b-[2px] border-[#white]"
                   : "text-[white]"
               }  py-4`}
              >Projects</li>
            </Link>
            <Link href="#services">
              <li
              onClick={() => handleClick("testimonial")}
              className={`${
                clickedFeild === "testimonial"
                  ? "text-[white] border-b-[2px] border-[#white]"
                  : "text-[white]"
              }  py-4`}
              >Services</li>
            </Link>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
