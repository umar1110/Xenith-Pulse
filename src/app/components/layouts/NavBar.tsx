"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./navbar.css";
import Image from "next/image";
function NavBar() {
  const navigate = useRouter();

  const [isNavBarOpen, setNavBarOpen] = useState(false);

  const handleMenuBtn = () => {
    setNavBarOpen((prevIsNavBarOpen) => !prevIsNavBarOpen);
  };

  const handleNavigation = (id: any) => {
    if (window.location.pathname === "/") {
      // If already on homepage, scroll to #services
      const servicesElement = document.getElementById(id);
      servicesElement!.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate.push("/");

      setTimeout(() => {
        const servicesElement = document.getElementById(id);
        if (servicesElement) {
          servicesElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("nav-bar");
    const threshold = 70;
    let scrollDiff = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollChange = scrollTop - lastScrollTop;

      // Accumulate the scroll difference
      scrollDiff += scrollChange;

      // If scrolled more than the threshold, hide or show the navbar
      if (scrollDiff > threshold) {
        navbar!.style.top = "-100%";
        scrollDiff = 0; // Reset scroll difference after hiding
      } else if (scrollDiff < -threshold) {
        navbar!.style.top = "0%";
        scrollDiff = 0; // Reset scroll difference after showing
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      
      id="nav-bar"
      className={`fixed   flex top-0 left-0 z-[999]  lg:px-12 max-w-screen w-screen  nav-bar justify-between   px-4 py-4`}
    >
      <Link
        href={"/"}
        onClick={() => {
          if (window.innerWidth < 880) {
            handleMenuBtn();
          }
          handleNavigation("homePage");
        }}
        className=" text-white cursor-pointer  logo  font-bold text-3xl"
      >
        <Image src={"/images/XenithLogo.png"} alt="Logo" height={1} width={230}    />
      </Link>

      <div className={`btn  flex justify-center items-center gap-3 `}>
        <div
          onClick={handleMenuBtn}
          className={` open-menu-button  cursor-pointer mdd:hidden w-[30px] flex flex-col gap-2 ${
            isNavBarOpen ? "hidden" : "flex"
          } `}
        >
          <div className="linee  border-t-[3px] border-white"></div>
          <div className="linee  border-t-[3px] border-white"></div>
          <div className="linee  border-t-[3px] border-white"></div>
        </div>

        <div
          onClick={handleMenuBtn}
          className={`close-menu-button cross-container h-8 flex justify-center items-center cursor-pointer mdd:hidden w-[30px]  ${
            isNavBarOpen ? "block" : "hidden"
          }   mdd:hidden w-[15px] `}
        >
          <div className="line line1 bg-white"></div>
          <div className="line line2 bg-white"></div>
        </div>
      </div>

      <div
        className={`mobile-nav-menu left-0 w-full absolute  mdd:hidden mt-12 pt-12 pb-24  gap-4   ${
          true
            ? "bg-black text-white border-zinc-100"
            : "bg-black text-white border-zinc-100"
        } transform transition-transform duration-500 ${
          isNavBarOpen ? "translate-y-0" : "-translate-y-[150%]"
        } mdd:hidden overflow-hidden flex flex-col py-2 border-t-[1px]  w-[90%]`}
      >
        {[
          { name: "Home", href: "homePage" },
          { name: "About Us", href: "aboutus" },
          { name: "Services", href: "services" },
          // { name: "Pricing", href: "pricing" },
          { name: "contact us", href: "contactus" },
        ].map((e, idx) => (
          <div
            key={idx}
            className="group overflow-hidden  py-[2px] relative w-fit px-4"
          >
            <>
              <button
                onClick={() => {
                  handleNavigation(e.href);
                }}
                className="relative uppercase text-3xl font-sans font-semibold leading-none tracking-tighter "
              >
                {e.name}

                <span
                  className={`span1  transition-transform duration-300 ease-in-out    absolute w-full h-[4px] bg-white bottom-0 left-0`}
                ></span>

                <span
                  className={`span2  transition-transform duration-300 ease-in-out    absolute w-full  h-[4px] bg-white bottom-0 left-0`}
                ></span>
              </button>
            </>
          </div>
        ))}
      </div>
      {/* Desktop options */}
      <div
        className={` w-full desktop-options font-light gap-3 font-['NeueMontreal'] h-[35px] mdd:flex  hidden   `}
      >
        <div className="absolute desktop-options flex top-[50%] -translate-y-[50%] left-[50%] h-[35px] w-fit -translate-x-[50%] ">
          {[
            { name: "Home", href: "homePage" },
            { name: "About Us", href: "aboutus" },
            { name: "Services", href: "services" },
            // { name: "Pricing", href: "pricing" },
            { name: "contact us", href: "contactus" },
          ].map((o, idx) => {
            if (idx < 3) {
              return (
                <div
                  key={idx + 100}
                  className={`option-box relative text-white   
                    ml-6 min-w-fit  text-[20px] overflow-hidden `}
                >
                  <div
                    className={`up-down-box   relative h-full  cursor-pointer flex justify-center   translate-y-[45%]   flex-col  transition-transform duration-300`}
                  >
                    (
                    <>
                      <button
                        onClick={() => {
                          handleNavigation(o.href);
                        }}
                      >
                        {o.name}
                      </button>
                      <button
                        onClick={() => {
                          handleNavigation(o.href);
                        }}
                      >
                        {o.name}
                      </button>{" "}
                    </>
                    )
                  </div>
                  <span
                    className={`absolute  bg-white bottom-0 -translate-x-[110%] transition-transform duration-300 ease-in-out   w-full h-[2px] `}
                  ></span>
                </div>
              );
            }
          })}
        </div>
        {/* Part 2 */}
        <div className="absolute desktop-options flex top-[50%] -translate-y-[50%] right-0 -translate-x-[50%] h-[35px] w-fit ">
          {[
            { name: "Home", href: "homePage" },
            { name: "About Us", href: "aboutus" },
            { name: "Services", href: "services" },
            
            { name: "contact us", href: "contactus" },
          ].map((o, idx) => {
            if (idx > 2) {
              return (
                <div
                key={idx + 100}
                className={`option-box relative text-white   
                  ml-6 min-w-fit  text-[20px] overflow-hidden `}
              >
                <div
                  className={`up-down-box   relative h-full  cursor-pointer flex justify-center   translate-y-[45%]   flex-col  transition-transform duration-300`}
                >
                  (
                  <>
                    <button
                      onClick={() => {
                        handleNavigation(o.href);
                      }}
                    >
                      {o.name}
                    </button>
                    <button
                      onClick={() => {
                        handleNavigation(o.href);
                      }}
                    >
                      {o.name}
                    </button>{" "}
                  </>
                  )
                </div>
                <span
                  className={`absolute  bg-white bottom-0 -translate-x-[110%] transition-transform duration-300 ease-in-out   w-full h-[2px] `}
                ></span>
              </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
