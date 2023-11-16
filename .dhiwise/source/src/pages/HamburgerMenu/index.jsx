import React from "react";

import { Button, Img, List, Text } from "components";

const HamburgerMenuPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
            <div className="header-row my-[9px]">
              <Img className="h-8" src="images/img_menu_32X32.svg" alt="menu" />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 sm:hidden items-center justify-between w-[96%] md:w-full">
              <Img
                className="h-[35px]"
                src="images/img_group10392_13.svg"
                alt="Group10392"
              />
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center">
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
              <div className="flex flex-row gap-6 items-center justify-between rounded-md w-[19%] md:w-full">
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
          </div>
        </header>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1246px] mb-[194px] mx-auto pt-3 md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32"
            >
              Choose your plan
            </Text>
            <Text
              className="leading-[29.00px] text-blue_gray-600 text-center text-lg"
              size="txtGilroyMedium18Bluegray600"
            >
              <>
                Vulputate augue sed dui, eget bibendum quis fames varius id.
                Pellentesque orci molestie morbi.
                <br />
                felis elementum, eu mauris ac arcu tincidunt.{" "}
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-row gap-[34px] items-center justify-center rounded-md w-[15%] md:w-full">
              <Button
                className="cursor-pointer font-medium min-w-[79px] text-base text-center"
                shape="round"
                size="lg"
              >
                Monthly
              </Button>
              <Text
                className="text-base text-blue_gray-400"
                size="txtGilroyMedium16Bluegray400"
              >
                Annually
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-8 sm:px-5 rounded-md shadow-bs4 w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start mt-[7px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800_01 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Free
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtGilroyBold40"
                  >
                    $0
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end mt-[37px] py-[5px] w-[56%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[67%] md:w-full">
                    <div className="bg-blue-A700_01 h-2 my-1 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      500 visitors
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start mt-9 w-[98%] md:w-full">
                    <div className="bg-blue-A700_01 h-2 mb-2.5 mt-[3px] rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      Unlimited projects
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-start mt-[29px] w-full">
                    <div className="bg-blue-A700_01 h-2 my-1 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      extended free trial
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] mt-[50px] text-base text-center"
                  shape="round"
                  size="3xl"
                >
                  Create account
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-8 sm:px-5 rounded-md shadow-bs4 w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start mt-[7px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800_01 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Standard
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtGilroyBold40"
                  >
                    $99
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end mt-[37px] py-[5px] w-[56%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[73%] md:w-full">
                    <div className="bg-blue-A700_01 h-2 my-1 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      5000 visitors
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start mt-9 w-[98%] md:w-full">
                    <div className="bg-blue-A700_01 h-2 mb-2.5 mt-[3px] rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      Unlimited projects
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-start mt-[29px] w-full">
                    <div className="bg-blue-A700_01 h-2 my-1 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      extended free trial
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] mt-[50px] text-base text-center"
                  shape="round"
                  size="3xl"
                >
                  Create account
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-8 sm:px-5 rounded-md shadow-bs4 w-full">
                <div className="flex flex-col gap-7 items-center justify-start mt-[9px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800_01 sm:text-xl"
                    size="txtGilroySemiBold24"
                  >
                    Enterprise
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtGilroyBold40"
                  >
                    $299
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end mt-[37px] py-[5px] w-[56%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[79%] md:w-full">
                    <div className="bg-blue-A700_01 h-2 my-1 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      +5000 visitors
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start mt-9 w-[98%] md:w-full">
                    <div className="bg-blue-A700_01 h-2 mb-2.5 mt-[3px] rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      Unlimited projects
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-start mt-[29px] w-full">
                    <div className="bg-blue-A700_01 h-2 my-1 rounded-[50%] w-2"></div>
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtGilroyRegular18"
                    >
                      extended free trial
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] mt-[50px] text-base text-center"
                  shape="round"
                  size="3xl"
                >
                  Create account
                </Button>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenuPage;
