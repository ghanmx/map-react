import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtLatoRegular413: "font-lato font-normal",
  txtGilroyRegular16Black900: "font-gilroy font-normal",
  txtGilroyBold32: "font-bold font-gilroy",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtRobotoMedium8: "font-medium font-roboto",
  txtUrbanistItalicThin24: "font-hairline font-urbanist italic",
  txtLatoRegular212: "font-lato font-normal",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtLatoMedium173: "font-lato font-medium",
  txtLatoSemiBold173: "font-lato font-semibold",
  txtOpenSansMedium18: "font-medium font-opensans",
  txtLatoMedium212: "font-lato font-medium",
  txtLatoMedium239Gray600: "font-lato font-medium",
  txtGilroyMedium16Bluegray300: "font-gilroy font-medium",
  txtOpenSansMedium14: "font-medium font-opensans",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold24Black900: "font-gilroy font-semibold",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtGilroyMedium12Bluegray400: "font-gilroy font-medium",
  txtLatoBold446: "font-bold font-lato",
  txtLatoExtraBold689: "font-extrabold font-lato",
  txtGilroyMedium18Black90001: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtLatoSemiBold212WhiteA700: "font-lato font-semibold",
  txtLatoBold477: "font-bold font-lato",
  txtGilroyMedium32: "font-gilroy font-medium",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium20BlueA700: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtLatoSemiBold239: "font-lato font-semibold",
  txtGilroyRegular15Gray500: "font-gilroy font-normal",
  txtGilroySemiBold16Green600: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtLatoMedium186: "font-lato font-medium",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtOpenSansMedium20: "font-medium font-opensans",
  txtLatoMedium31: "font-lato font-medium",
  txtLatoBold265: "font-bold font-lato",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtLatoBold223: "font-bold font-lato",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroyMedium14Green600: "font-gilroy font-medium",
  txtGilroySemiBold16Red700: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroyMedium24Bluegray900: "font-gilroy font-medium",
  txtGilroyMedium24Black90002: "font-gilroy font-medium",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtGilroyMedium14Gray800: "font-gilroy font-medium",
  txtLatoSemiBold198: "font-lato font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtOpenSansMedium24Bluegray900: "font-medium font-opensans",
  txtOpenSansMedium18Bluegray400: "font-medium font-opensans",
  txtLatoBold347: "font-bold font-lato",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtLatoMedium239Black90004: "font-lato font-medium",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtLatoMedium239: "font-lato font-medium",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtLatoSemiBold212: "font-lato font-semibold",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular15: "font-gilroy font-normal",
  txtGilroyRegular15Gray90001: "font-gilroy font-normal",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroySemiBold15: "font-gilroy font-semibold",
  txtLatoMedium186Black9004c: "font-lato font-medium",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyBold40: "font-bold font-gilroy",
  txtLatoMedium31WhiteA700: "font-lato font-medium",
  txtGilroyMedium18Bluegray600: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtLatoSemiBold186: "font-lato font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtGilroyRegular18Black900: "font-gilroy font-normal",
  txtGilroyMedium16WhiteA700: "font-gilroy font-medium",
  txtLatoExtraBold239: "font-extrabold font-lato",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
