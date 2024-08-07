"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ServicePage() {
  const [windowWidth, setWindowWidth] = useState(0);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const services = [
    {
      img: "/images/service01.jfif",
      name: "CONTENT CREATION",
      title: "LET US BRING YOUR BRAND TO LIFE!",
      description:
        "We are specialize in creating eye-catching visuals, custom graphics and strategic social media content to bring your brand to life.",
    },
    {
      img: "/images/service02.jfif",
      name: "SALES AND MARKETING",
      title: "ELEVATE YOUR BUSINES WITH IMPACTFUL TACTICS!",
      description:
        "We deliver innovative sales and marketing strategies designed to boost your brand’s visibility and drive results",
    },
    {
      img: "/images/service03.png",
      name: "WEBSITE DEVELOPMENT",
      title: "UNLEASH YOUR BRAND’S POTENTIAL WITH TOP-NOTCH WEBSITE!",
      description:
        "We craft cutting-edge, user friendly websites designed to elevate your brand and drive growth.",
    },
  ];

 

  // useGSAP(() => {
  //   const cards = document.querySelectorAll(".service-card");

  //   cards.forEach((card, index) => {
  //     gsap.from(card, {
  //       y: "30%",
  //       opacity: 0,
  //       stagger: 0.4,
  //       scrollTrigger: {
  //         trigger:card,
         
  //         start:"top 60%", 
  //         end: "+=90",
        
        
  //         scrub: 1, 
         
  //       },
  //     });
  //   });

  // });
  useEffect(() => {
    // Update the state with the window width
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set initial window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    // Setup ScrollTrigger animations
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {
      gsap.from(card, {
        y: "30%",
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "+=90",
       
          scrub: 1,
        },
      });
    });
  }, [windowWidth]); // Re-run on windowWidth change

  return (
    <div id="services" className="relative  text-white">
      <div className="services-container mt-10 pb-24">
        <h1
          style={{
            background: "linear-gradient(to right, #FF2DF7, #A816FB ,#5200FF)",
          }}
          className="relative text-3xl h-[65px] md:h-[106px] lg:h-[146px] flex items-center justify-center pl-5 font-semibold md:font-extrabold mt-8 mb-14 bg-red-400 w-[85%] mx-auto md:text-4xl rounded-2xl md:w-[60%] lg:w-[80%]"
        >
          <Image
            src={"/images/Services-chipko.png"}
            alt="Design"
            height={1000}
            width={1000}
            className="h-[99px] lg:h-[272px] lg:w-[251px] md:h-[180px] md:w-[181px] w-[103px] absolute -top-4 lg:-top-20 lg:-left-12 -left-4 opacity-70"
          />
          OUR SERVICES
        </h1>

        {/* Service multiple cards */}
        <div className="services-cards space-y-20 lg:space-y-26 w-[95%] xl:w-[80%] max-w-[1600px] mx-auto h-full">
          {services.map((s, idx) => {
            return (
              <div key={idx}>
                {/* Service Card */}
               {
                windowWidth !== 0 ? 
                <>
             {windowWidth > 768 ? (
                  <>
                    {idx % 2 === 0 ? (
                      <>
                        <div className="service-card md:flex">
                          {/* image */}
                          <div className="service-image rounded-xl overflow-hidden w-[96%] sm:w-[60%] md:w-[40%] sm:h-[300px] md:h-[400px] mx-auto">
                            <Image
                              src={s.img}
                              alt="service"
                              height={1000}
                              width={10000}
                              className="w-full h-full"
                            />
                          </div>
                          {/* content */}
                          <div className="service-content flex flex-col items-center md:items-start md:justify-center md:pl-12 md:text-start py-7 md:w-[60%] space-y-4 ">
                            <h2
                              style={{
                                fontFamily: " sans-serif",
                                fontWeight: 900,
                                lineHeight: "21.94px",
                                letterSpacing: "0.16em",
                              }}
                              className="service-title text-center !bg-clip-text bg-gradient-to-r from-[#FF2DF7] via-[#A816FB] to-[#5200FF] [-webkit-text-fill-color:transparent] my-5 text-[18px] sm:!text-2xl"
                            >
                              {s.name}
                            </h2>
                            <h2 className="service-title leading-7 text-4xl md:text-5xl font-bold text-center   md:text-start mb-3 xl:w-[85%]">
                              {s.title}
                            </h2>
                            <p className="service-description w-[80%] md:w-full mx-auto lg:mx-0 md:text-lg  text-center md:text-start xl:w-[50%]">
                              {s.description}
                            </p>

                            <div className="w-[60%] h-[1px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] my-20 rounded-[100%] opacity-70"></div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="service-card md:flex">
                          {/* content */}
                          <div className="service-content flex flex-col items-center md:items-start md:justify-center md:pr-12 md:text-start py-7 md:w-[60%] space-y-4">
                            <h2
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 700,
                                lineHeight: "21.94px",
                                letterSpacing: "0.16em",
                              }}
                              className="service-title text-center !bg-clip-text bg-gradient-to-r from-[#FF2DF7] via-[#A816FB] to-[#5200FF] [-webkit-text-fill-color:transparent] my-5 text-[18px] sm:!text-2xl"
                            >
                              {s.name}
                            </h2>
                            <h2 className="service-title leading-7 text-4xl md:text-5xl font-bold text-center md:text-start mb-3 xl:w-[85%]">
                              {s.title}
                            </h2>
                            <p className="service-description w-[80%] md:w-full mx-auto lg:mx-0 md:text-lg text-center md:text-start xl:w-[50%]">
                              {s.description}
                            </p>
                            <div className="w-[60%] h-[1px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] my-20 rounded-[100%] opacity-70"></div>
                          </div>
                          {/* image */}
                          <div
                            className="service-image bg-black rounded-xl overflow-hidden w-[96%] sm:w-[60%] sm:h-[300px] md:h-[400px] md:w-[40%] mx-auto"
                            style={{
                              boxShadow:
                                " rgba(0, 0, 0, 0.5) -7px 10px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                            }}
                          >
                            <Image
                              src={s.img}
                              alt="service"
                              height={10000}
                              width={10000}
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="service-card mdd:flex w-full ">
                      <h2
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 700,
                          lineHeight: "21.94px",
                          letterSpacing: "0.16em",
                        }}
                        className="service-title text-center !bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)]  [-webkit-text-fill-color:transparent] my-5 text-[18px] sm:!text-2xl"
                      >
                        {s.name}
                      </h2>
                      {/* image */}

                      <div
                        className="service-image rounded-xl overflow-hidden w-[96%] sm:w-[80%] min-h-[200px] mx-auto"
                        style={{
                          boxShadow:
                            " rgba(0, 0, 0, 0.5) 0px 3px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                        }}
                      >
                        <Image
                          
                          src={s.img}
                          alt="service"
                          height={1000}
                          width={10000}
                          className="w-full h-full"
                        />
                      </div>
                      {/* content */}
                      <div className="service-content flex flex-col items-center py-7 space-y-4">
                        <p
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "24.38px",
                            textAlign: "center",
                          }}
                          className="w-[60%] mx-auto sm:!text-[25px] text-white"
                        >
                          {s.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "16px",
                            fontWeight: 700,
                            lineHeight: "19.5px",
                            textAlign: "center",
                          }}
                          className="service-description w-[100%] sm:w-[90%] sm:!text-[19px]"
                        >
                          {s.description}
                        </p>
                        {/* <Link
                          style={{
                            background:
                              "linear-gradient(to right, #FF2DF7, #A816FB ,#5200FF)",
                          }}
                          href={`/services/${s.name}`}
                          className="w-[60%] mx-auto py-4 rounded-full font-bold text-xl !mt-8 text-center"
                        >
                          Learn More
                        </Link> */}
                      </div>
                    </div>
                  </>
                )}
                </> :
                 <> 
                 <p className="h-screen w-screen flex items-center justify-center">
                  LOADING.......
                 </p>
                </>
               }

              </div>
            );
          })}
        </div>
      </div>
     
    </div>
  );
}

export default ServicePage;
