import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-gray-50 md:h-[493px] h-[727px] mx-auto py-[72px] w-full">
            <div className="absolute bottom-[10%] h-[493px] inset-x-[0] mx-auto w-full">
              <Img
                className="absolute h-[493px] inset-[0] justify-center m-auto w-full"
                src="images/img_pattern_white_A700.svg"
                alt="Pattern"
              />
            </div>
          </div>
          <Header className="flex items-center justify-center mt-[-NaNpx] mx-auto w-full z-[1]" />
          <div className="flex flex-col items-center justify-start mt-[-577px] mx-auto rounded-md w-[78%] z-[1]">
            <div className="flex flex-col gap-4 items-center justify-start">
              <Text
                className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900 w-full"
                size="txtChivoBold52"
              >
                Product analytics solution to help your business grow
              </Text>
              <Text
                className="leading-[28.00px] text-bluegray-600 text-center text-lg w-[74%] sm:w-full"
                size="txtChivoRegular18Bluegray600"
              >
                Simple plans that grow with your business. No contracts. No
                setup fees.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[60px] rounded-md w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between w-full">
                <Img
                  className="h-[557px] md:h-auto object-cover rounded-md"
                  src="images/img_rectangle214.png"
                  alt="Rectangle214"
                />
                <div className="flex flex-col gap-[42px] items-center justify-start">
                  <Img
                    className="h-[195px] md:h-auto object-cover rounded-bl-md rounded-br-md w-full"
                    src="images/img_rectangle215.png"
                    alt="Rectangle215"
                  />
                  <Img
                    className="h-80 md:h-auto object-cover rounded-tl-md rounded-tr-md w-full"
                    src="images/img_rectangle216.png"
                    alt="Rectangle216"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[50px] w-full">
              <Text
                className="leading-[28.00px] text-bluegray-600 text-lg"
                size="txtChivoRegular18Bluegray600"
              >
                <>
                  Growit provides agencies and marketers with dashboards,
                  combines data sources, and visualizes trends. With a focus on
                  agencies, our goal is to help you grow.
                  <br />
                  <br />
                  Founded in 2014 by Diane Davis and featured in the hit show
                  Silicon Valley, Growit has expanded to over three hundred
                  thousand users. In 2020, Growthlvvy joined the newly-launched,
                  agency-focused, marketing technology suite — Traject. Made up
                  of passionate team members from 22 cities and 11 countries,
                  Traject represents 7 brands in the marketing technology space.
                  We remain true to our roots, committed to delivering the
                  easiest out-of-the-box dashboarding solution while also
                  innovating, expanding integrations, and improving usability.
                  <br />
                  <br />
                  Growit supports hundreds of thousands of users and businesses
                  from solopreneurs to enterprises — with a focus on helping
                  growing agencies track their efforts and deliver value.
                  <br />
                  <br />
                  Strong customer relationships are more important than ever,
                  but the scale and nature of online business means it&#39;s
                  harder than ever to create personal connections with
                  customers. That&#39;s why we created the world&#39;s first
                  Conversational Relationship Platform — to help businesses
                  build better customer relationships through personalized,
                  messenger-based experiences.
                </>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtChivoBold36"
                  >
                    4.2m
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-bluegray-600 w-full"
                    size="txtChivoRegular16Bluegray600"
                  >
                    Users tracked their data product per daily{" "}
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                      size="txtChivoBold36"
                    >
                      2014
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-bluegray-600 w-full"
                      size="txtChivoRegular16Bluegray600"
                    >
                      Our experience has been 7 years since 2014
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                      size="txtChivoBold36"
                    >
                      426
                    </Text>
                    <Text
                      className="leading-[26.00px] text-base text-bluegray-600 w-full"
                      size="txtChivoRegular16Bluegray600"
                    >
                      Employees who work with us from different countries
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
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[981px] mt-[100px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
            size="txtChivoBold44"
          >
            Meet our team family
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:gap-5 gap-[105px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[29px] items-center justify-start pb-[5px] w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60.png"
                    alt="EllipseSixty"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Diane Davis
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      CEO and CO Founder
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start pb-[5px] w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_192X192.png"
                    alt="EllipseSixty One"
                  />
                  <div className="flex flex-col gap-3 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Jonas Delonge
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Vice President
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_1.png"
                    alt="EllipseSixty Two"
                  />
                  <div className="flex flex-col gap-3.5 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Samantha Ruby
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Director of Marketing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_2.png"
                    alt="EllipseSixty Three"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Anastasya
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Sr Creative Designer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_3.png"
                    alt="EllipseSixty Four"
                  />
                  <div className="flex flex-col gap-3.5 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Lizy Renata
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Sr Software Engineer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_4.png"
                    alt="EllipseSixty Five"
                  />
                  <div className="flex flex-col gap-3.5 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Ben Washington
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Sr Front End Engineer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-4 px-4 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start pb-[5px] w-[86%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_5.png"
                    alt="EllipseSixty Six"
                  />
                  <div className="flex flex-col gap-3 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Jimmy Neutron
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Account Executive
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-1 w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start mt-2 pb-[5px] w-[78%] md:w-full">
                  <Img
                    className="h-48 md:h-auto rounded-[50%] w-48"
                    src="images/img_ellipse60_6.png"
                    alt="EllipseSixty Seven"
                  />
                  <div className="flex flex-col gap-3 items-center justify-start">
                    <Text
                      className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                      size="txtChivoBold22Gray900"
                    >
                      Antony Velich
                    </Text>
                    <Text
                      className="text-bluegray-600 text-lg"
                      size="txtChivoRegular18Bluegray600"
                    >
                      Account Executive
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[31px] items-center justify-start p-2 w-full">
                <Img
                  className="h-48 md:h-auto rounded-[50%] w-48"
                  src="images/img_ellipse60_7.png"
                  alt="EllipseSixty Eight"
                />
                <div className="flex flex-col gap-3.5 items-center justify-start">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtChivoBold22Gray900"
                  >
                    Spencer Roberto
                  </Text>
                  <Text
                    className="text-bluegray-600 text-lg"
                    size="txtChivoRegular18Bluegray600"
                  >
                    Product Support Specialist
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start max-w-[1112px] mt-[84px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
            size="txtChivoBold44"
          >
            <>We&#39;ve helped their SaaS applications</>
          </Text>
          <div className="flex md:flex-col flex-row gap-10 items-center justify-center w-auto md:w-full">
            <Img
              className="h-[30px] w-[13%]"
              src="images/img_microsoft1_teal_202.svg"
              alt="MicrosoftOne"
            />
            <Img
              className="h-[30px] w-[11%]"
              src="images/img_vector_teal_202.svg"
              alt="Vector"
            />
            <Img
              className="h-9 w-[7%]"
              src="images/img_trash_36X69.svg"
              alt="trash"
            />
            <Img
              className="h-[35px] w-[12%]"
              src="images/img_shopify_teal_202.svg"
              alt="Shopify"
            />
            <Img
              className="h-[33px] w-[13%]"
              src="images/img_group_teal_202.svg"
              alt="Group"
            />
            <Img
              className="h-[30px] w-[7%]"
              src="images/img_intel_30X73.svg"
              alt="Intel"
            />
          </div>
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
              The fastest and simple way to generate growing business solutions
              with our products
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
            src="images/img_pattern_1.svg"
            alt="pattern One"
          />
        </div>
        <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
