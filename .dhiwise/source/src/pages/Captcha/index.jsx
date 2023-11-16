import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";

const CaptchaPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_2.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-1 text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                shape="round"
                size="2xl"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="sm:h-[1460px] h-[727px] md:h-[744px] mb-[163px] md:px-5 relative w-[38%] sm:w-full">
          <div className="absolute flex flex-col md:gap-10 gap-[62px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <Img
              className="h-[35px] w-[32%]"
              src="images/img_group.svg"
              alt="Group"
            />
            <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-auto"
                size="txtGilroySemiBold32"
              >
                Sign in to Recharge Direct
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col h-[52px] md:h-auto items-center justify-start px-3 rounded-lg w-full">
                    <Text
                      className="text-base text-blue_gray-300"
                      size="txtGilroyMedium16Bluegray300"
                    >
                      jane@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-[512px] sm:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18Bluegray900"
                    >
                      Password
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex sm:flex-col flex-row sm:gap-5 h-[52px] md:h-auto items-center justify-start px-3 rounded-lg w-[512px] sm:w-full">
                      <div className="flex flex-col items-start justify-start pr-[5px] py-[5px]">
                        <Text
                          className="text-base text-blue_gray-300"
                          size="txtGilroyMedium16Bluegray300"
                        >
                          Enter Password
                        </Text>
                      </div>
                      <Img
                        className="h-5 w-5"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                    <a
                      href="javascript:"
                      className="text-blue-A700 text-lg w-auto"
                    >
                      <Text size="txtGilroyMedium18BlueA700">
                        Forgot Password?
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50_03 flex flex-row font-roboto items-center justify-between outline outline-[1px] outline-blue_gray-100_02 p-[7px] rounded-sm shadow-bs2 w-full">
                  <CheckBox
                    className="font-medium leading-[normal] ml-[5px] my-[18px] text-left text-sm"
                    inputClassName="h-6 mr-[5px] outline outline-[2px] outline-gray-400_02 w-6"
                    name="Imnotarobot"
                    id="Imnotarobot"
                    label="I’m not a robot"
                  ></CheckBox>
                  <div className="flex flex-col gap-1 items-center justify-center mr-[3px] w-auto">
                    <Img
                      className="h-[46px] w-12"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <a
                      href="javascript:"
                      className="text-[8px] text-gray-500 w-auto"
                    >
                      <Text size="txtRobotoMedium8">Privacy - Terms</Text>
                    </a>
                  </div>
                </div>
                <div className="bg-blue-A700 flex flex-col font-gilroy items-start justify-start px-[18px] py-3 rounded-md w-[512px] sm:w-full">
                  <a
                    href="javascript:"
                    className="text-base text-white-A700 w-auto"
                  >
                    <Text size="txtGilroyMedium16WhiteA700">Log in</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 border border-blue_gray-100_02 border-solid bottom-[0] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto p-[7px] shadow-bs3 w-[79%]">
            <div className="flex flex-col items-center justify-start my-1 w-full">
              <Input
                name="Group10033"
                placeholder="Select all images with a bicycle."
                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg w-full"
                wrapClassName="w-full"
                shape="square"
                color="blue_A200_02"
                size="lg"
              ></Input>
              <div className="flex flex-col h-[386px] sm:h-auto items-center justify-start mt-[5px] w-[386px] sm:w-full">
                <div className="flex flex-col h-[386px] sm:h-auto items-center justify-start w-[386px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle.png"
                      alt="Rectangle"
                    />
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_126X126.png"
                      alt="Rectangle One"
                    />
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_1.png"
                      alt="Rectangle Two"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-evenly mt-1 w-full">
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_2.png"
                      alt="Rectangle Three"
                    />
                    <div className="md:h-[102px] h-[114px] relative w-[114px]">
                      <Img
                        className="absolute bottom-[0] h-[102px] object-cover right-[0] w-[102px]"
                        src="images/img_rectangle_102X102.png"
                        alt="Rectangle Four"
                      />
                      <Button
                        className="absolute flex h-[26px] items-center justify-center left-[0] top-[0] w-[26px]"
                        shape="circle"
                        color="blue_A200_02"
                        size="sm"
                      >
                        <Img
                          src="images/img_checkmark_26X26.svg"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_3.png"
                      alt="Rectangle Five"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-1 w-full">
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_4.png"
                      alt="Rectangle Six"
                    />
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_5.png"
                      alt="Rectangle Seven"
                    />
                    <Img
                      className="h-[126px] md:h-auto object-cover w-[126px]"
                      src="images/img_rectangle_6.png"
                      alt="Rectangle Eight"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-5 w-[97%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <Img
                  className="h-6 ml-2.5 sm:ml-[0] w-6"
                  src="images/img_music.svg"
                  alt="music"
                />
                <Img
                  className="h-6 ml-2.5 sm:ml-[0] w-6"
                  src="images/img_info.svg"
                  alt="info"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[94px] sm:ml-[0] ml-[186px] rounded-sm text-center text-sm"
                  color="blue_A200_02"
                  size="md"
                >
                  VERIFY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaptchaPage;
