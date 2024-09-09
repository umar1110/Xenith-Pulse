'use client'
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Page() {


    useGSAP(()=>{



    })

  return (
    <div className="min-h-screen py-24 ">
      {/* Image backgournd and Text */}
      <div
        className={`bg-image bg-[url('/images/service1-bg.png')]  h-[50vh] md:h-[65vh]  w-full text-white flex items-center justify-center text-center text-3xl font-bold md:text-5xl bg-no-repeat bg-cover bg-center `}
      >
        <p className="">
          ELEVATE YOUR BUSINESS
          <br /> WITH <br className="md:hidden" />
          <span className="!bg-clip-text bg-gradient-to-r from-[#FF2DF7] via-[#A816FB] to-[#5200FF] [-webkit-text-fill-color:transparent] font-extrabold">
            IMPACTFUL TACTICS
          </span>
        </p>
      </div>
      {/* Detail Cards  */}
      {/* Card 1 */}
      <div className=" d-card1 detail-cards h-[55vh] w-full flex ">
        {/* Line Div */}
        <div className="line-div-1 relative flex flex-col items-center justify-center w-6 mx-1 h-full ">
          {/* Line */}
          <div className="  d-line1 mx-auto h-full w-[10%] " style={{ background: 'linear-gradient(to bottom, #5200FF, #FF2DF7)' }} />
          {/* Ball */}
          <div className="d-ball1 absolute top-2 outline outline-[7px] outline-solid outline-purple-800  aspect-[5/5]  w-[50%] rounded-full bg-black " />
        </div>

        {/* Content */}

        <div className="d-contnent1 flex flex-col gap-4 w-fit  flex-grow">
          {/* Heading */}
          <h1 className="d-heading1 capitalize text-xl !bg-clip-text bg-gradient-to-r from-[#FF2DF7] via-[#A816FB] to-[#5200FF] [-webkit-text-fill-color:transparent] font-extrabold mx-auto w-fit ">
            SEO/SEM
          </h1>

          {/* Picture */}
          <div className=" w-[95%] mx-auto max-h-[60%] ">
            <Image
              src={"/images/service1/seo-sem.png"}
              alt="Seo-img"
              className="h-full w-full"
              height={1000}
              width={1000}
            />
          </div>

          {/* dETAILS */}
          <p className="w-[90%] mx-auto text-center text-white">
            SEO and SEM services enhance a {"website's"} visibility on search
            engines. SEO focuses on organic strategies like keyword research and
            on-page optimization, while SEM includes paid advertising like PPC
            campaigns. Both aim to drive more traffic, improve online presence,
            and boost conversions.
          </p>
        </div>
      </div>

      {/* ***************************** */}
      Card 2
      <div className=" d-card1 detail-cards h-[40vh] w-full ">
        {/* Line Div */}
        <div className="line-div-1 relative flex flex-col items-center justify-center w-6 mx-1 h-full ">
          {/* Line */}
          <div className="  d-line1 mx-auto bg-red-400 h-full w-[20%] " />
          {/* Ball */}
          <div className="d-ball1 absolute top-0 outline outline-[7px] outline-solid outline-purple-800  aspect-[5/5]  w-[50%] rounded-full bg-black " />
        </div>
      </div>
      {/* Card 3 */}
      <div className=" d-card1 detail-cards h-[40vh] w-full ">
        {/* Line Div */}
        <div className="line-div-1 relative flex flex-col items-center justify-center w-6 mx-1 h-full ">
          {/* Line */}
          <div className="  d-line1 mx-auto bg-red-400 h-full w-[20%] " />
          {/* Ball */}
          <div className="d-ball1 absolute top-0 outline outline-[7px] outline-solid outline-purple-800  aspect-[5/5]  w-[50%] rounded-full bg-black " />
        </div>
      </div>
    </div>
  );
}


