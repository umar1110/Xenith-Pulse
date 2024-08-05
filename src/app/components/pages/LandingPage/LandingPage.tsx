import Image from "next/image";
function LandingPage() {
  return (
    <div id="homePage" className="w-full flex justify-center flex-col mb-20">
      <div className="relative main-content-landing-page w-full h-[283px]   sm:h-screen  flex items-center justify-center  ">
        <div className="background-landing-page absolute top-0 left-0 h-[90%]  w-full bg-[url('/images/LandingPageBackground.png')] mt-16   bg-contain bg-no-repeat bg-center opacity-15  ml-14 " />

        <div className="absolute left-[50%] -translate-x-[50%] bottom-0 mx-auto content-text h-[80%] w-[95%] sm:space-y-2  sm:h-fit sm:bottom-[50%] translate-y-[50%] ">
          <h1 className="font-bold font-[inherit] !bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent] inline-block text-[35px] sm:text-4xl md:text-6xl text-center w-full">
            XenithPulse
          </h1>
          <h2 className="small-description text-[15px] font-bold text-white text-center w-full font-sans [text-shadow:1px_0_0_rgba(0,0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),-1px_0_0_rgba(0,0,_0,_0.2),_0-1px_0_rgba(0,_0,_0,_0.2)] sm:text-xl md:text-4xl ">
            GROW YOUR DIGITAL PRESENSCE AND <br />
            REACH MORE WITH OUR DIGITAL <br className="md:hidden" /> SOLUTIONS.
          </h2>

          <h2 className="part3 font-mon text-center w-full font-extralight text-[12px] sm:text-lg md:text-xl text-white">
            Imagine a world where your social media posts go viral and <br /> your
            brand becomes a household name. <br /> {"That's"} the power of <span className=" italic font-bold font-[inherit] !bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent] inline-block">XenithPulse.</span>
          </h2>
        </div>
      </div>
        
    </div>
  );
}

export default LandingPage;
