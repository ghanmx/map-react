import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const StoreLocatorPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-50 bg-no-repeat flex flex-col font-gilroy h-[1080px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_storelocator.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[512px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white-A700 flex flex-col gap-8 items-center justify-end p-3 shadow-bs9 w-full">
              <div className="bg-white-A700 border border-blue_gray-300 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-6 p-[9px] rounded-lg w-[91%] md:w-full">
                <Img
                  className="h-5 sm:ml-[0] ml-[3px] sm:mt-0 my-[3px] w-5"
                  src="images/img_search_bluegray_401.svg"
                  alt="search"
                />
                <Text
                  className="ml-2 sm:ml-[0] sm:mt-0 mt-[5px] text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Assembly Store
                </Text>
                <Img
                  className="h-5 sm:ml-[0] ml-[255px] sm:mt-0 my-[3px] w-5"
                  src="images/img_microphone.svg"
                  alt="microphone"
                />
              </div>
              <div className="flex flex-col gap-6 items-center justify-start rounded w-[91%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344.png"
                    alt="Rectangle1344"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344_116X116.png"
                    alt="Rectangle1344 One"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344_1.png"
                    alt="Rectangle1344 Two"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344_2.png"
                    alt="Rectangle1344 Three"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344_3.png"
                    alt="Rectangle1344 Four"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344_4.png"
                    alt="Rectangle1344 Five"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-end justify-between rounded w-full">
                  <Img
                    className="h-[116px] md:h-auto object-cover rounded w-[116px]"
                    src="images/img_rectangle1344_5.png"
                    alt="Rectangle1344 Six"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Assembly Stores
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[5px] text-base text-black-900 w-full"
                      size="txtGilroyRegular16Black900"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                    <Text
                      className="mt-[13px] text-green-600 text-sm"
                      size="txtGilroyMedium14Green600"
                    >
                      Open now
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[254px] md:mt-0 mt-[407px] w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex flex-row gap-[45px] items-start justify-start ml-6 md:ml-[0] w-[34%] md:w-full">
                <Img
                  className="h-6 mb-[19px] w-6"
                  src="images/img_location_24X24.svg"
                  alt="location"
                />
                <Img
                  className="h-6 mt-[19px] w-6"
                  src="images/img_location_24X24.svg"
                  alt="location One"
                />
              </div>
              <div className="flex flex-row items-start justify-between mt-1 w-[72%] md:w-full">
                <Img
                  className="h-6 mt-1 w-6"
                  src="images/img_location_24X24.svg"
                  alt="location Two"
                />
                <Img
                  className="h-6 mb-1 w-6"
                  src="images/img_location_24X24.svg"
                  alt="location Three"
                />
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-end ml-14 md:ml-[0] mt-4 w-4/5 md:w-full">
                <Img
                  className="h-6 mt-[68px] w-6"
                  src="images/img_location_24X24.svg"
                  alt="location Four"
                />
                <div className="flex flex-col items-start justify-start w-[85%]">
                  <div className="flex flex-row items-start justify-start w-full">
                    <Img
                      className="h-6 mb-[22px] w-6"
                      src="images/img_location_24X24.svg"
                      alt="location Five"
                    />
                    <Img
                      className="h-6 ml-[34px] mt-[22px] w-6"
                      src="images/img_location_24X24.svg"
                      alt="location Six"
                    />
                    <Img
                      className="h-6 mb-[22px] ml-20 w-6"
                      src="images/img_location_24X24.svg"
                      alt="location Seven"
                    />
                  </div>
                  <Img
                    className="h-6 md:ml-[0] ml-[58px] mt-[82px] w-6"
                    src="images/img_location_24X24.svg"
                    alt="location Eight"
                  />
                  <Img
                    className="h-6 md:ml-[0] ml-[3px] mt-[34px] w-6"
                    src="images/img_location_24X24.svg"
                    alt="location Nine"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-A700 flex-1 md:h-[412px] h-[50px] mb-[362px] md:ml-[0] ml-[260px] md:mt-0 mt-[668px] relative rounded-[50%] w-full">
            <Img
              className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]"
              src="images/img_checkmark_50X50.svg"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 items-center justify-start ml-6 md:ml-[0] md:mt-0 mt-[590px] w-full">
            <Button
              className="border border-blue_gray-400 border-solid flex h-10 items-center justify-center w-10"
              shape="round"
              color="white_A700"
              size="lg"
            >
              <Img
                className="h-6"
                src="images/img_location.svg"
                alt="location Ten"
              />
            </Button>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-col gap-2 items-center justify-start rounded-md w-full">
                <Img
                  className="h-6 mt-[7px] rounded-[50%] w-6"
                  src="images/img_plus_24X24.svg"
                  alt="plus"
                />
                <Line className="bg-blue_gray-400 h-px w-full" />
                <Img
                  className="h-6 mb-[7px] rounded-[50%] w-6"
                  src="images/img_minussolid.svg"
                  alt="minusSolid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreLocatorPage;
