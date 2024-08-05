"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function StraignLineAmination() {
    
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
  useGSAP(() => {
  
    gsap.to("#animated-up-line2", {
      y: "100%",
      scrollTrigger: {
        trigger: "#animated-up-line2",
        scroller: "body",
        start: "top 50%",
        end: "top top",
        scrub: true,
      },
    });



    // <-- automatically reverted
  });


  return (
    <div
      id="animation-for-aboutus"
      className="animated-down-line2 relative overflow-hidden "
      style={{
        width: "3px",
        borderRadius: "70%",
        margin: "0px  auto 50px auto",
        height: "40vh",
        background: "purple",

        // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
      }}
    >
      <div
        id="animated-up-line2"
        className={`animated-up-line2 w-full h-full absolute  ${
         "bg-[#242424]"
        }`}
      ></div>
    </div>
  );
}

export default StraignLineAmination;
