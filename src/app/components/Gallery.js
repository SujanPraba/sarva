import Image from "next/image";
import img1 from "../../public/gallery/1.png";
import img2 from "../../public/gallery/2.png";
import img3 from "../../public/gallery/3.png";
import img4 from "../../public/gallery/4.png";
import img5 from "../../public/gallery/5.png";
import img6 from "../../public/gallery/6.png";
const Gallery = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="text-[42px] font-[700] text-center text-[#00715C] pb-8">
        Gallery
      </p>
      <div className="lg:block hidden w-[100%] mx-auto">
        <div>
          <div className="flex justify-between w-full">
            <Image src={img1} alt="img" className="h-[320px] w-[320px]" />
            <Image src={img2} alt="img" className="h-[320px] w-[320px]" />
            <Image src={img3} alt="img" className="h-[320px] w-[320px]" />
          </div>
          <div className="flex justify-between w-full py-8">
            <Image src={img4} alt="img" className="h-[320px] w-[320px]" />
            <Image src={img5} alt="img" className="h-[320px] w-[320px]" />
            <Image src={img6} alt="img" className="h-[320px] w-[320px]" />
          </div>
        </div>
      </div>
      <div className="md:block lg:hidden hidden w-[85%] mx-auto">
        <div>
          <div className="flex justify-between w-full">
            <Image src={img1} alt="img" className="h-[280px] w-[280px]" />
            <Image src={img2} alt="img" className="h-[280px] w-[280px]" />
          </div>
          <div className="flex justify-between w-full py-8">
            <Image src={img3} alt="img" className="h-[280px] w-[280px]" />
            <Image src={img4} alt="img" className="h-[280px] w-[280px]" />
          </div>
          <div className="flex justify-between w-full py-8">
            <Image src={img5} alt="img" className="h-[280px] w-[280px]" />
            <Image src={img6} alt="img" className="h-[280px] w-[280px]" />
          </div>
        </div>

      </div>
      <div className="block md:hidden w-[85%] mx-auto">
        <div>
          <div className="flex justify-center w-full">
            <Image src={img1} alt="img" className="h-[320px] w-[320px]" />
          </div>
          <div className="flex justify-center w-full py-2">
            <Image src={img2} alt="img" className="h-[320px] w-[320px]" />
          </div>
          <div className="flex justify-center w-full py-2">
            <Image src={img3} alt="img" className="h-[320px] w-[320px]" />
          </div>
          <div className="flex justify-center w-full py-2">
            <Image src={img4} alt="img" className="h-[320px] w-[320px]" />
          </div>
          <div className="flex justify-center w-full py-2">
            <Image src={img5} alt="img" className="h-[320px] w-[320px]" />
          </div>
          <div className="flex justify-center w-full py-2">
            <Image src={img6} alt="img" className="h-[320px] w-[320px]" />
          </div>
        </div>
    </div>
    </div>
  );
};

export default Gallery;
