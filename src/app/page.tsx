import CrossAnimation from "./components/animations/CrossAnimation";
import StraignLineAmination from "./components/animations/StraignLineAmination";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import ContactUsPage from "./components/pages/ContactUS/ContactUsPage";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import ServicePage from "./components/pages/ServicesPage/ServicePage";

export default function Home() {
  return (
    <>
      <LandingPage />
       
      {/* <div className="flex mt-4 sm:mt-0">
        <CrossAnimation />
        <CrossAnimation />
        <CrossAnimation />
        <CrossAnimation className={"hidden sm:flex"}/>
        <CrossAnimation className={"hidden sm:flex"}/>
        <CrossAnimation className={"hidden sm:flex"}/>
        <CrossAnimation className={"hidden sm:flex"}/>
        <CrossAnimation className={"hidden sm:flex"} />

        <CrossAnimation className={"hidden mdd:flex"}/>
        <CrossAnimation className={"hidden mdd:flex"}/>
        <CrossAnimation className={"hidden mdd:flex"}/>
        <CrossAnimation className={"hidden mdd:flex"} />
      </div> */}
      <AboutUs />
      <CrossAnimation />
      <ServicePage/>
      <StraignLineAmination/>
      <ContactUsPage/>
      

    </>
  );
}
// 'use client'

// import { useEffect,useRef } from "react";

// export default function Home() {


  
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.offsetX}px`;
//         cursorRef.current.style.top = `${e.offsetY}px`;
//         console.log(e)
//       }
//     };

//     const page = document.getElementById("LandingPage");
//     const cursor = document.getElementById("custom-cursor") || <div style={{}}></div> ;

//     if (page) {
//       page.addEventListener("mousemove", moveCursor);

//       // Handle cursor position during scroll
//       page.addEventListener("mouseenter",moveCursor);
//       page.addEventListener("mouseleave", () => {
//         // cursorRef.style.scale = 0;
//       });
//     }

//     console.log(cursorRef)
//     return () => {};
//   }, []);

//   return (
//     <>
//     <div  id="LandingPage" className="min-h-screen mt-20 !bg-red-300 relative" >
//       <div ref={cursorRef}   id="custom-cursor" className="custom-cursor">
//         Hello
//       </div>
      
//     </div>
//     </>
//   );
// }

