import Image from "next/image";

function AboutUs() {
  return (
    <div id="aboutus" className="max-w-screen ">
      <div className="mobile-about-us md:hidden w-full">
        <div className="image-container sm:w-[60%] mx-auto ">
          <Image
            src={"/images/about-us-cube.png"}
            alt="About-Us"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>

        <div className="about-us-content w-full space-y-5">
          <h4
            className="about-us-heading !bg-clip-text [-webkit-text-fill-color:transparent] text-center sm:!text-[45px] "
            style={{
              background: `linear-gradient(89.21deg, #FF2DF7 , #A816FB, #5200FF),
linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,

              fontSize: "35px",
              fontWeight: "900",
              lineHeight: "38.08px",
            }}
          >
            ABOUT US
          </h4>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "center",
            }}
            className="about-us-detials text-center sm:!text-[20px] text-white"
          >
            At XenithPulse, we are passionate <br />
            about helping businesses reach their <br />
            full potential through innovative and strategic <br />
            marketing solutions. <br />
            Our team of experienced professionals is dedicated <br />
            to delivering exceptional results tailored <br />
            to your unique needs <br />
          </p>
        </div>
      </div>

      {/* Desktop AboutUS */}
      <div className="md:flex hidden w-[98%] mdd:w-[95%] mx-auto items-center justify-between lg:w-[70%] ">
        {/* content */}
        <div className="about-us-data w-1/2 md:w-[60%] text-start">
          <h4
            className="about-us-heading !bg-clip-text [-webkit-text-fill-color:transparent] "
            style={{
              background: `linear-gradient(89.21deg, #FF2DF7 , #A816FB, #5200FF),
linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`,

              fontSize: "45px",
              fontWeight: "900",
              lineHeight: "59.08px",
            }}
          >
            ABOUT US
          </h4>
          <div className="w-[70%] h-[1px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF]  to-[#FF2DF7]  my-10 rounded-[100%] opacity-50 " />
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "30px",
              textAlign: "left",
            }}
            className="!text-white"
          >
            At XenithPulse, we are passionate about <br />
            helping businesses reach their full potential <br />
            through innovative and strategic <br />
            marketing solutions. Our team of experienced <br />
            professionals is dedicated to delivering <br />
            exceptional results tailored to your unique needs <br />
          </p>

          {/* Learn More button  */}
        </div>
        {/* image */}
        <div
          className="image-container w-[50%] md:w-[40%]
        "
        >
          <Image
            src={"/images/about-us-cube.png"}
            alt="About-Us"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </div>
      {/* <div className="w-[80vw] h-[1px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF]  to-[#FF2DF7] mx-auto my-20 rounded-[100%] opacity-70 " /> */}
    </div>
  );
}

export default AboutUs;
