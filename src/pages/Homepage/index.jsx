import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start rounded-md w-[49%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 w-full"
                  size="txtChivoBold52"
                >
                  We help any business to get analytics and sales marketing
                </Text>
                <Text
                  className="leading-[28.00px] text-bluegray-600 text-lg w-[83%] sm:w-full"
                  size="txtChivoRegular18"
                >
                  The fastest and simple way to generate growing business
                  solutions with our products
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start mt-8 rounded-md w-[90%] md:w-full">
                <div className="bg-gray-50 border border-solid border-teal-400 flex sm:flex-col flex-row gap-[22px] items-center justify-end p-1.5 rounded-md w-full">
                  <Input
                    name="box"
                    placeholder="Your business email"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="sm:flex-1 sm:mt-0 my-[9px] w-3/5 sm:w-full"
                    type="email"
                    color="gray_50"
                  ></Input>
                  <Button
                    className="cursor-pointer min-w-[150px] sm:mt-0 my-0.5 text-base text-center"
                    shape="round"
                    color="teal_400"
                    size="xs"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                </div>
                <Text
                  className="italic text-base text-bluegray-600"
                  size="txtChivoItalic16"
                >
                  *we will not disseminate your email and so you avoid spam
                </Text>
              </div>
              <div className="flex flex-row gap-[60px] items-center justify-start mt-12 w-[72%] md:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                    size="txtChivoBold44"
                  >
                    350+
                  </Text>
                  <Text
                    className="leading-[28.00px] text-bluegray-600 text-lg w-full"
                    size="txtChivoRegular18"
                  >
                    Over 500 business powered with us
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                    size="txtChivoBold44"
                  >
                    4.8
                  </Text>
                  <Text
                    className="leading-[28.00px] text-bluegray-600 text-lg w-full"
                    size="txtChivoRegular18"
                  >
                    Rating on google play and app store
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[434px] sm:h-auto md:mt-0 mt-4 object-cover w-1/2 md:w-full"
              src="images/img_group450.png"
              alt="group450"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1112px] mt-24 mx-auto p-0.5 md:px-5 w-full">
            <Img
              className="h-[30px] ml-1 sm:ml-[0] w-[13%]"
              src="images/img_microsoft1.svg"
              alt="MicrosoftOne"
            />
            <Img
              className="h-[30px] sm:ml-[0] ml-[65px] w-[11%]"
              src="images/img_vector.svg"
              alt="Vector"
            />
            <Img
              className="h-9 sm:ml-[0] ml-[101px] w-[7%]"
              src="images/img_trash.svg"
              alt="trash"
            />
            <Img
              className="h-[35px] ml-24 sm:ml-[0] w-[12%]"
              src="images/img_shopify.svg"
              alt="Shopify"
            />
            <Img
              className="h-[33px] sm:ml-[0] ml-[63px] w-[13%]"
              src="images/img_group.svg"
              alt="Group"
            />
            <Img
              className="h-[30px] sm:ml-[0] ml-[88px] w-[7%]"
              src="images/img_intel.svg"
              alt="Intel"
            />
          </div>
          <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] mt-[100px] mx-auto md:px-5 w-full">
            <Text
              className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-[49%] sm:w-full"
              size="txtChivoBold44"
            >
              How our platform process easy to use?
            </Text>
            <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-full">
              <div className="flex flex-col gap-6 items-center justify-start">
                <Img
                  className="h-[180px] w-full"
                  src="images/img_illustrationlo.svg"
                  alt="illustrationlo"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="leading-[32.00px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl w-full"
                    size="txtChivoBold22"
                  >
                    Login or sign up to be able use our platform
                  </Text>
                  <Text
                    className="leading-[28.00px] text-bluegray-600 text-center text-lg w-full"
                    size="txtChivoRegular18"
                  >
                    You must log in first to be able to use our platform to get
                    your product analytics
                  </Text>
                </div>
              </div>
              <Img
                className="h-5 md:mt-0 mt-[111px]"
                src="images/img_directionline.svg"
                alt="DirectionLine"
              />
              <div className="flex flex-col gap-6 items-center justify-start">
                <Img
                  className="h-[180px] md:h-auto object-cover w-full"
                  src="images/img_illustrationco.png"
                  alt="illustrationco"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="leading-[32.00px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl w-full"
                    size="txtChivoBold22"
                  >
                    Connect your website with just a few click
                  </Text>
                  <Text
                    className="leading-[28.00px] text-bluegray-600 text-center text-lg w-full"
                    size="txtChivoRegular18"
                  >
                    Select the application you wanted to be able to connect with
                    just a few clicks
                  </Text>
                </div>
              </div>
              <Img
                className="h-5 md:mt-0 mt-[114px]"
                src="images/img_directionline.svg"
                alt="DirectionLine One"
              />
              <div className="flex flex-col gap-6 items-center justify-start">
                <Img
                  className="h-[180px] w-full"
                  src="images/img_illustrationge.svg"
                  alt="illustrationge"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="leading-[32.00px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl w-full"
                    size="txtChivoBold22"
                  >
                    Take some sales data that you want
                  </Text>
                  <Text
                    className="leading-[28.00px] text-bluegray-600 text-center text-lg w-full"
                    size="txtChivoRegular18"
                  >
                    You already have sales data of your product with some
                    variants you want
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal-401 flex flex-row items-center justify-start mt-[100px] p-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start ml-[124px] mt-[25px] md:px-5 w-[82%]">
              <Img
                className="h-[545px] w-[49%]"
                src="images/img_illustration_545X536.svg"
                alt="illustration"
              />
              <div className="flex flex-col gap-12 items-center justify-start w-[44%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 w-full"
                    size="txtChivoBold44WhiteA700"
                  >
                    The reasons to prefer choosing our platform
                  </Text>
                  <Text
                    className="leading-[28.00px] text-lg text-white-A700 w-[83%] sm:w-full"
                    size="txtChivoRegular18WhiteA700"
                  >
                    Seamless integration of more than 20+ apps that can help
                    analytics your product
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-10 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-1 flex-col gap-[21px] items-start justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtChivoBold22WhiteA700"
                        >
                          Real time data
                        </Text>
                        <Text
                          className="leading-[26.00px] text-base text-white-A700 w-full"
                          size="txtChivoRegular16"
                        >
                          Get the data you need to make smarter decisions.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_offer.svg"
                        alt="offer"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtChivoBold22WhiteA700"
                        >
                          Fast and Easy to use
                        </Text>
                        <Text
                          className="leading-[26.00px] text-base text-white-A700 w-full"
                          size="txtChivoRegular16"
                        >
                          Easily to convert API with just a few clicks
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtChivoBold22WhiteA700"
                        >
                          Safely Security
                        </Text>
                        <Text
                          className="leading-[26.00px] text-base text-white-A700 w-full"
                          size="txtChivoRegular16"
                        >
                          All customer data is encrypted
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtChivoBold22WhiteA700"
                        >
                          Powerfull App
                        </Text>
                        <Text
                          className="leading-[26.00px] text-base text-white-A700 w-full"
                          size="txtChivoRegular16"
                        >
                          Provide simple and minimalist dashboard
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start max-w-[1112px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[44%] md:w-full">
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full"
                size="txtChivoBold44"
              >
                We provide features for your product
              </Text>
              <div className="flex flex-col gap-10 justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded-[12px] shadow-bs1 w-full">
                  <div className="flex flex-col justify-start w-[97%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-start mr-[52px] w-[88%] md:w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_map.svg"
                        alt="map"
                      />
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                        size="txtChivoBold22"
                      >
                        Integrated with Social Media
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start ml-14 md:ml-[0]">
                      <Text
                        className="leading-[26.00px] text-base text-bluegray-600 w-full"
                        size="txtChivoRegular16Bluegray600"
                      >
                        Seamless integration of more than 20+ apps that can help
                        analytics
                      </Text>
                      <Text
                        className="text-base text-teal-400 underline"
                        size="txtChivoBold16"
                      >
                        Learn More
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start ml-8 md:ml-[0] w-[61%] md:w-full">
                  <div className="flex flex-row gap-4 items-end justify-start w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_icon.svg"
                      alt="Icon"
                    />
                    <Text
                      className="mt-[15px] text-[22px] text-bluegray-200 sm:text-lg md:text-xl"
                      size="txtChivoBold22Bluegray200"
                    >
                      Always in syncronized
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-start w-[79%] md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_iconreport.svg"
                      alt="IconReport"
                    />
                    <Text
                      className="mt-3.5 text-[22px] text-bluegray-200 sm:text-lg md:text-xl"
                      size="txtChivoBold22Bluegray200"
                    >
                      Powerful report
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[548px] items-start justify-start md:pr-10 sm:pr-5 pr-[215px] py-[215px] w-[49%] md:w-full"
              style={{ backgroundImage: "url('images/img_group858.png')" }}
            >
              <Button
                className="flex h-[70px] items-center justify-center mb-12 w-[70px]"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[26px]"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] mt-[100px] mx-auto pt-1 md:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start">
              <Text
                className="text-lg text-yellow-700"
                size="txtChivoRegular18Yellow700"
              >
                Global Scale
              </Text>
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-full"
                size="txtChivoBold44"
              >
                Trusted by company around the world
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
              <Img
                className="h-[370px] w-full"
                src="images/img_illustrationma.svg"
                alt="IllustrationMa"
              />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                      size="txtChivoBold36"
                    >
                      350+
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-bluegray-600 w-full"
                      size="txtChivoRegular16Bluegray600"
                    >
                      Over 500k business powered with us
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                      size="txtChivoBold36"
                    >
                      750k
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-bluegray-600 w-full"
                      size="txtChivoRegular16Bluegray600"
                    >
                      Users used our platform in around the world
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                      size="txtChivoBold36"
                    >
                      4.8{" "}
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-bluegray-600 w-full"
                      size="txtChivoRegular16Bluegray600"
                    >
                      Rating on google play and app store
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-[18px] items-start justify-start">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtChivoBold36"
                  >
                    24+
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-bluegray-600 w-full"
                    size="txtChivoRegular16Bluegray600"
                  >
                    More than 30 countries trust our platform
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] mt-[100px] mx-auto md:px-5 w-full">
            <Text
              className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-[49%] sm:w-full"
              size="txtChivoBold44"
            >
              See what our customers have to say about us
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-md w-full">
                <div className="flex flex-col gap-8 items-start justify-start my-[9px] w-full">
                  <Img
                    className="h-[27px] w-[37%]"
                    src="images/img_vector_deep_orange_A400.svg"
                    alt="Vector One"
                  />
                  <Text
                    className="italic leading-[150.00%] text-base text-bluegray-600 w-full"
                    size="txtChivoItalic16"
                  >
                    “I’ve used Growit at many companies before—it’s the go-to
                    solution when you need user and product analytics.”
                  </Text>
                  <div className="flex flex-row gap-4 items-start justify-start w-[72%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse1905.png"
                      alt="Ellipse1905"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtChivoBold18"
                      >
                        Try Washington
                      </Text>
                      <Text
                        className="text-base text-bluegray-701"
                        size="txtChivoRegular16Bluegray701"
                      >
                        CEO of Netflix
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-md w-full">
                <div className="flex flex-col gap-8 items-start justify-start my-2 w-full">
                  <Img
                    className="h-[27px] w-[45%]"
                    src="images/img_microsoft.svg"
                    alt="Microsoft"
                  />
                  <Text
                    className="italic leading-[150.00%] text-base text-bluegray-600 w-full"
                    size="txtChivoItalic16"
                  >
                    “Uses Growit as the source of truth for all its product
                    data, and to determine where the team should focus its
                    time.”
                  </Text>
                  <div className="flex flex-row gap-4 items-start justify-start pb-[3px] w-[78%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse1906.png"
                      alt="Ellipse1906"
                    />
                    <div className="flex flex-col items-start justify-start mt-1">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtChivoBold18"
                      >
                        Cyhntya Rebecca
                      </Text>
                      <Text
                        className="mt-1 text-base text-bluegray-701"
                        size="txtChivoRegular16Bluegray701"
                      >
                        CEO of Microsoft
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-md w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start my-[9px] w-full">
                  <Img
                    className="h-[30px] w-[38%]"
                    src="images/img_shopify_30X106.svg"
                    alt="Shopify One"
                  />
                  <Text
                    className="italic leading-[150.00%] text-base text-bluegray-600 w-full"
                    size="txtChivoItalic16"
                  >
                    “Uses Growit to get deeper user insights that could be
                    easily shared among teams throughout the world, improving
                    the company investment.”{" "}
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-[77%] md:w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse1907.png"
                      alt="Ellipse1907"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtChivoBold18"
                      >
                        Derry Alasca
                      </Text>
                      <Text
                        className="text-base text-bluegray-701"
                        size="txtChivoRegular16Bluegray701"
                      >
                        Manager of Shopify
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
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
                    name="box One"
                    placeholder="Your business email"
                    className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                    wrapClassName="sm:flex-1 sm:mt-0 my-1.5 w-[61%] sm:w-full"
                    type="email"
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
              src="images/img_pattern.svg"
              alt="pattern"
            />
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
