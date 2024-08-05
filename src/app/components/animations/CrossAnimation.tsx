
"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CrossAnimation({className}:{className?:String}) {

    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // gsap code here...
    gsap.to(".animated-up-line", {
      x: "100%",
      scrollTrigger: {
        trigger: ".animated-up-line",
        scroller: "body",
        start: "top 70%",
        end: "top top",
        scrub: true,
      },
    });



    // <-- automatically reverted
  });

    return (
        <div className={`animated-cross-box  relative   flex justify-center items-center  h-[300px] my-[30px]  w-[300px] b mx-auto ${className}`}>
          <div
            className="animated-down-line w-[400px] h-[3px] rounded-2xl   absolute origin-top  -rotate-45   overflow-hidden "
            style={{
              background:"linear-gradient(to right,black,purple,purple,purple,black)"
                ,
              transform: "rotate(45deg)",
              // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
            }}
          >
            <div
              className={`animated-up-line  w-full h-full absolute  ${
                "bg-[#242424]" 
              }`}
            ></div>
          </div>
          <div
            className="animated-down-line  w-[400px]  h-[3px]  rounded-2xl  absolute origin-top  -rotate-45   overflow-hidden "
            style={{
              background:  "linear-gradient(to right,black,purple,purple,purple,black)"
                ,
              transform: "rotate(-45deg)",
              // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
            }}
          >
            <div
              className={`animated-up-line  w-full h-full absolute  ${
                 "bg-[#242424]" 
              }`}
            ></div>
          </div>
        </div>

    );
}

export default CrossAnimation;