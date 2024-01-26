import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ResourceCenterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start max-w-[1082px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start rounded-md w-1/2 md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 w-full"
                  size="txtChivoBold52"
                >
                  With our resources help your business grow rapidly
                </Text>
                <Text
                  className="leading-[28.00px] text-bluegray-600 text-lg w-[90%] sm:w-full"
                  size="txtChivoRegular18Bluegray600"
                >
                  Our books, guides, and others have helped thousands of your
                  peers get better at their business
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-md w-[90%] md:w-full">
                <div className="bg-gray-50 border border-bluegray-200 border-solid flex sm:flex-col flex-row gap-[11px] items-end justify-end p-2 rounded-md w-full">
                  <Input
                    name="Frame"
                    placeholder="Search resources"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="sm:flex-1 mb-1 sm:mt-0 mt-[7px] w-[63%] sm:w-full"
                    shape="square"
                    color="gray_50"
                    size="sm"
                  ></Input>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[150px]"
                    leftIcon={
                      <Img
                        className="h-6 ml-[30px] mr-2.5 my-[13px]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    shape="round"
                    color="teal_400"
                    size="xs"
                    variant="fill"
                  >
                    <div className="text-base text-left">Search</div>
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="h-[355px] w-[42%]"
              src="images/img_illustration_355X450.svg"
              alt="illustration"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1112px] mt-[100px] mx-auto md:px-5 rounded-md w-full"
            orientation="horizontal"
          >
            <div className="bg-deep_purple-300 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
              <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-start mb-[3px] pt-[5px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtChivoBold22"
                  >
                    Guides{" "}
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-white-A700_a2 w-full"
                    size="txtChivoRegular16WhiteA700a2"
                  >
                    Evertything you need to know our platform
                  </Text>
                </div>
                <Text
                  className="text-lg text-white-A700 underline"
                  size="txtChivoBold18WhiteA700"
                >
                  View All
                </Text>
              </div>
            </div>
            <div className="bg-green-400 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
              <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-start mb-[3px] pt-[7px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtChivoBold22"
                  >
                    Blog
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-white-A700_a2 w-full"
                    size="txtChivoRegular16WhiteA700a2"
                  >
                    Our best tips for growing your business
                  </Text>
                </div>
                <Text
                  className="text-lg text-white-A700 underline"
                  size="txtChivoBold18WhiteA700"
                >
                  View All
                </Text>
              </div>
            </div>
            <div className="bg-lime-700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
              <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-start mb-[3px] pt-[5px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtChivoBold22"
                  >
                    Webinars
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-white-A700_a2 w-full"
                    size="txtChivoRegular16WhiteA700a2"
                  >
                    Your all-access pass to exclusive content
                  </Text>
                </div>
                <Text
                  className="text-lg text-white-A700 underline"
                  size="txtChivoBold18WhiteA700"
                >
                  View All
                </Text>
              </div>
            </div>
            <div className="bg-red-300 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
              <div className="flex flex-col md:gap-10 gap-[72px] items-start justify-start mb-[3px] pt-[5px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtChivoBold22"
                  >
                    Customer Stories
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-white-A700_a2 w-full"
                    size="txtChivoRegular16WhiteA700a2"
                  >
                    See what Growly success looks like
                  </Text>
                </div>
                <Text
                  className="text-lg text-white-A700 underline"
                  size="txtChivoBold18WhiteA700"
                >
                  View All
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                size="txtChivoBold44"
              >
                Guides and Resources
              </Text>
              <Text
                className="text-gray-900 text-lg underline"
                size="txtChivoBold18"
              >
                View All
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-8 items-center justify-start pb-[3px] rounded-md w-[49%] md:w-full">
                <Img
                  className="h-80 md:h-auto object-cover rounded-md w-full"
                  src="images/img_rectangle217.png"
                  alt="Rectangle217"
                />
                <div className="flex flex-col gap-6 items-start justify-start pt-1 w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Guides
                    </Text>
                    <Text
                      className="leading-[40.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                      size="txtChivoBold30"
                    >
                      Getting started with Guide for your help center: Setting
                      up
                    </Text>
                    <Text
                      className="leading-[28.00px] text-bluegray-600 text-lg w-full"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Guide enables you to provide end users with a complete
                      self-service support option and empowers agents to better
                      help customer
                    </Text>
                  </div>
                  <Text
                    className="text-gray-900 text-lg underline"
                    size="txtChivoBold18"
                  >
                    Read Now
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-10 w-[49%]"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-between my-0 w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover"
                    src="images/img_rectangle218.png"
                    alt="Rectangle218"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start pt-1">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                      <Text
                        className="text-lg text-teal-400"
                        size="txtChivoRegular18Teal400"
                      >
                        Guides
                      </Text>
                      <Text
                        className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtChivoBold22Gray900"
                      >
                        Advance your product analytics strategy
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-between my-0 w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover"
                    src="images/img_rectangle219.png"
                    alt="Rectangle219"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start pt-1">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                      <Text
                        className="text-lg text-teal-400"
                        size="txtChivoRegular18Teal400"
                      >
                        Guides
                      </Text>
                      <Text
                        className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtChivoBold22Gray900"
                      >
                        A tour of Growit automations
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-between my-0 w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover"
                    src="images/img_rectangle220.png"
                    alt="Rectangle220"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start pt-1">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                      <Text
                        className="text-lg text-teal-400"
                        size="txtChivoRegular18Teal400"
                      >
                        Guides
                      </Text>
                      <Text
                        className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                        size="txtChivoBold22Gray900"
                      >
                        How to get support about Growly with us
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <List
            className="flex flex-col gap-[100px] items-center max-w-[1112px] mt-[100px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-12 items-center justify-start rounded-md w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                  size="txtChivoBold44"
                >
                  Latest Blog
                </Text>
                <Text
                  className="text-gray-900 text-lg underline"
                  size="txtChivoBold18"
                >
                  View All
                </Text>
              </div>
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between rounded-md w-full">
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-md w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_rectangle221.png"
                    alt="Rectangle221"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Blog
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-2 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                      size="txtChivoBold22Gray900"
                    >
                      The Ultimate Guide To Customer Journey Analytics
                    </Text>
                    <Text
                      className="mt-6 text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-md w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_rectangle222.png"
                    alt="Rectangle222"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Blog
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-2 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                      size="txtChivoBold22Gray900"
                    >
                      6 Customer Metrics That Will Help You Grow Your Business
                    </Text>
                    <Text
                      className="mt-6 text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-md w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_rectangle223.png"
                    alt="Rectangle223"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Blog
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-2 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                      size="txtChivoBold22Gray900"
                    >
                      The difference between product analytics and marketing
                    </Text>
                    <Text
                      className="mt-6 text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-12 items-center justify-start rounded-md w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                  size="txtChivoBold44"
                >
                  Customer Story
                </Text>
                <Text
                  className="text-gray-900 text-lg underline"
                  size="txtChivoBold18"
                >
                  View All
                </Text>
              </div>
              <div className="gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between rounded-md w-full">
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-md w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_rectangle221_220X344.png"
                    alt="Rectangle221 One"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-2 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                      size="txtChivoBold22Gray900"
                    >
                      Watching movies provides the best user experience
                    </Text>
                    <Text
                      className="mt-6 text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-md w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_rectangle222_220X344.png"
                    alt="Rectangle222 One"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-2 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                      size="txtChivoBold22Gray900"
                    >
                      Providing reliable applications for productivity
                    </Text>
                    <Text
                      className="mt-6 text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-md w-full">
                  <Img
                    className="h-[220px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_rectangle223_220X344.png"
                    alt="Rectangle223 One"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-lg text-teal-400"
                      size="txtChivoRegular18Teal400"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-2 text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                      size="txtChivoBold22Gray900"
                    >
                      <>
                        Build an online business—no matter what business
                        you&#39;re in
                      </>
                    </Text>
                    <Text
                      className="mt-6 text-gray-900 text-lg underline"
                      size="txtChivoBold18"
                    >
                      Read Now
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-teal-401 flex md:flex-col flex-row md:gap-10 gap-[75px] items-start justify-center max-w-[1112px] mt-[100px] mx-auto pb-[39px] pl-[39px] md:px-5 rounded-md w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[25px] md:mt-0 mt-12 rounded-md w-[45%] md:w-full">
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                size="txtChivoBold44WhiteA700"
              >
                Ready to get started?
              </Text>
              <Text
                className="leading-[28.00px] mt-4 text-lg text-white-A700_99 w-full"
                size="txtChivoRegular18WhiteA70099"
              >
                The fastest and simple way to generate growing business
                solutions with our products
              </Text>
              <div className="flex flex-col items-center justify-start mt-8 rounded-md w-full">
                <div className="bg-white-A700 border border-bluegray-200 border-solid flex sm:flex-col flex-row gap-[21px] items-center justify-end p-2 rounded-md w-full">
                  <Input
                    name="box"
                    placeholder="Your business email"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="sm:flex-1 sm:mt-0 my-1.5 w-[61%] sm:w-full"
                    type="email"
                    shape="square"
                    size="sm"
                  ></Input>
                  <Button
                    className="cursor-pointer min-w-[150px] text-base text-center"
                    shape="round"
                    color="teal_400"
                    size="xs"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="h-[281px] w-[46%]"
              src="images/img_pattern_2.svg"
              alt="pattern"
            />
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ResourceCenterPage;
