const Footer = () => {
  return (
    <div className="px-4">
      <div className="w-[80%] mx-auto lg:flex hidden justify-between">
        <div className="w-[100%]">
          <p className="text-[15px] font-[400] text-[#94A3B8] cursor-pointer text-center">
            COMPANY
          </p>
          <ul className="flex w-[60%] justify-center mx-auto">
            <li className="text-[13px] font-[400] pt-4 cursor-pointer px-3">
              About
            </li>
            <li className="text-[13px] font-[400] pt-4 cursor-pointer px-3">
              Features
            </li>
            <li className="text-[13px] font-[400] pt-4 cursor-pointer px-3">
              Gallery
            </li>
            <li className="text-[13px] font-[400] pt-4 cursor-pointer">
              About
            </li>
          </ul>
        </div>
      </div>
      <p className="h-[1px] w-full bg-slate-200 my-6"></p>
      <p className="text-[13px] font-[400] py-4 cursor-pointer px-3 text-center">© Copyright 2022, All Rights Reserved by Sarva</p>
    </div>
  );
};

export default Footer;
