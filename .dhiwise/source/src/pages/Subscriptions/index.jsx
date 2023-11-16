import React from "react";

import { Button, Img, Input, Text } from "components";

const SubscriptionsPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_4.svg"
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
                  src="images/img_arrowdown_gray_902.svg"
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
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-[5px] text-base text-gray-900"
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
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-center max-w-[1268px] mb-[413px] mx-auto p-[93px] md:px-5 rounded-[20px] shadow-bs w-full">
          <Img
            className="h-[289px] md:ml-[0] ml-[111px] w-[36%]"
            src="images/img_newslettersubs.svg"
            alt="NewsletterSubs"
          />
          <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start mr-[78px] w-[38%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroyMedium32"
            >
              Subscribe to our newsletter!
            </Text>
            <Text
              className="text-blue_gray-600 text-lg"
              size="txtGilroyMedium18Bluegray600"
            >
              Get latest insigts every week in you inbox.{" "}
            </Text>
            <Input
              name="Group10199"
              placeholder="Enter Your email"
              className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100_01 border-solid rounded-lg w-full"
              type="email"
              shape="round"
              size="md"
            ></Input>
            <Button
              className="cursor-pointer font-medium min-w-[406px] sm:min-w-full text-base text-center"
              shape="round"
              size="3xl"
            >
              Subscribe Newsletter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionsPage;
