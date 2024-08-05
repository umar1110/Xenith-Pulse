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
