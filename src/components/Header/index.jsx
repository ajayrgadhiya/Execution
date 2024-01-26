import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center p-[15px] w-full">
          <div className="header-row my-2.5">
            <div className="flex flex-row gap-4 items-end justify-center">
              <Img
                className="h-[30px] w-[30px]"
                src="defaultNoData.png"
                alt="Group448"
              />
              <Text
                className="mb-[5px] mt-2 text-base text-teal-400"
                size="txtCinzelDecorativeBold16"
              >
                Growit
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-10 sm:hidden items-start justify-center md:ml-[0] ml-[78px] w-[30%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Pricing
            </Text>
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Resources Center
            </Text>
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              About
            </Text>
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Contact
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-10 sm:hidden items-center justify-center md:ml-[0] ml-[290px] rounded-md w-[15%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Login
            </Text>
            <Button
              className="cursor-pointer font-bold font-chivo min-w-[122px] text-base text-center"
              shape="round"
              color="teal_400"
              size="xs"
              variant="fill"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
