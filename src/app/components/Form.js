"use client";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useState } from "react";
import foorm from "../../public/form.png";
import arrrow from "../../public/rightArrow.svg";

const FormComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    const response = await fetch("https://sheetdb.io/api/v1/bd797lhu6op10", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const res = await response.json();
    if (res.created) {
      setShowPopup(true);
      setIsLoading(false);
      setTimeout(() => {
        window.location.reload();
        setTimeout(() => {
          setShowPopup(false);
        }, 1000);
      }, 1000);
    } else {
      setIsLoading(false);
      setShowErrorPopup(true);
      setTimeout(() => {
        setShowErrorPopup(false);
      }, 2000);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {isLoading && (
        <div class="overlay">
          <span class="loader"></span>
        </div>
      )}
      <div className="bg-[#F1F1F1] pt-8" id="contactus">
        <div className="w-[85%] lg:flex items-center justify-between px-2  sm:px-0 mx-auto">
          <div className="lg:w-[40%] w-[95%] mx-auto">
            <p className="md:text-[34px] text-[20px] font-[700] text-[black]">
              {" "}
              <span className="text-[#00715C]">Contact </span>Us & We Can Work
              Together
            </p>
            <p className="py-4 text-[13px] font-[400] text-[#696969]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu
              enim id gravida pulvinar. Tristique consectetur mi curabitur
              congue enim dignissim{" "}
            </p>
            <div className="flex">
              <Form
                className=""
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Name",
                    },
                  ]}
                >
                  <Input placeholder="Your Name" className="w-[100px]" />
                </Form.Item>

                <Form.Item
                  //   label="Password"
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="Message">
                  <TextArea rows={4} placeholder="Your Message" />
                </Form.Item>
                <div className="flex justify-center md:-ml-[170px]">
                  <Form.Item>
                    <button
                      type="primary"
                      htmlType="submit"
                      className="flex bg-[#00715C] justify-center items-center py-[16px] lg:px-[24px] hover:px-[26px] w-[200px]"
                    >
                      <p className="text-white">Send Request</p>
                      <Image src={arrrow} alt="arrow" className="ml-1" />
                    </button>
                  </Form.Item>
                </div>
              </Form>
              <div className="md:flex lg:hidden hidden items-end">
              <Image
                src={foorm}
                alt="img"
                className="h-[300px] w-[200px]"
              />

              </div>
            </div>
            {showPopup && (
              <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
                <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                  <p className="text-[#329b32]">Form submitted successfully!</p>
                </div>
              </div>
            )}

            {showErrorPopup && (
              <div className="w-full h-screen bg-[rgba(0,0,0,.3)] fixed left-0 top-0 z-50 flex justify-center items-center">
                <div className=" bg-[#fff] p-8 rounded-md text-[15px] flex justify-center items-center w-[40%]">
                  <p className="text-[#cd3e3e]">
                    Something went wrong. Try again.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-[40%] lg:flex lg:pt-[80px] justify-end hidden">
            <div className="lg:px-[40px] px-[20px]">
              <Image
                src={foorm}
                alt="img"
                className="lg:h-fit lg:w-fit h-[300px] w-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
