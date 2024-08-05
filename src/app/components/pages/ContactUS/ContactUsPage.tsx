"use client";

import React, { useState } from "react";

import "./contactpage.css";
import { useToast } from "@/components/ui/use-toast"

function ContactUsPage() {
  const [name, setname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setmessage] = useState<string>("");
  const { toast } = useToast()
  const sendMessage = async (formdata: any) => {
    try {
      // toast.loading("Sending message to admin.");
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });


      const data = await response.json();
      
      if (response.ok) {
     
        toast({
          title: "Successfull",
          description: data.message,
        color:"black"

        })
        setEmail("");
        setname("");
        setmessage("");
      }
    } catch (error) {
      toast({
        title: "Failed",
        description:"Failed to send message ",
        color:"black"
      })
      
    }
  };

  const handleContactFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    await sendMessage(formData);
  };

  return (
    <div id="contactus" className={`bg-cover relative  text-black mb-24`}>
      <div className="contact-backgournd absolute top-0 left-0 h-full w-full bg-center bg-[url('/images/contactUsBg.jfif')] opacity-20"></div>
      <section className="p-1  ">
        <h1 className="hidden sm:block  w-[100vw] text-center font-bold font-mono !bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent]  text-[30px] pr-12 italic sm:text-3xl md:text-6xl my-4 ">
          REQUEST A QUOTE
        </h1>
        <div
          className={`grid items-center grid-cols-12 p-4 md:p-12 w-full rounded-2xl`}
        >
          <div className="text-left col-span-full lg:col-span-7 xl:col-span-8  shadow-md   flex items-center w-fit mx-auto lg:mx-0">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent  xl:pl-32">
              <div className="lg:max-w-lg">
                <div className="grid gap-6 my-16">
                  <div className=" items-center gap-4 flex flex-col text-center  w-[100vw] sm:w-fit sm:flex-row">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-12 h-12 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span className="flex flex-col items-start">
                      <span className="hidden sm:block text-white">
                        Location
                      </span>
                      <span className="!bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent] text-lg ">
                        Lahore, Pakistan
                      </span>
                    </span>
                  </div>
                  <div className=" items-center gap-4 flex flex-col text-center  w-[100vw] sm:w-fit sm:flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex flex-col items-start">
                      <span className="hidden sm:block text-white">
                        Lets Talk
                      </span>
                      <span className="!bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent] text-lg ">
                        +92-319-7114830
                      </span>
                    </span>
                  </div>
                  <div className=" items-center gap-4 flex flex-col text-center  w-[100vw] sm:w-fit sm:flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-12 h-12 text-white"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                    </svg>
                    <span className="flex flex-col items-start">
                      <span className="hidden sm:block text-white">
                        General Inquiry
                      </span>
                      <span className="!bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent] text-lg ">
                        khizar_ameer@xenith-agency.com
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className=" sm:hidden w-[100vw] text-center font-bold font-mono !bg-clip-text [background:linear-gradient(rgba(0,0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(#FF2DF7,#A816FB,#5200FF)] [-webkit-text-fill-color:transparent]  text-[30px] pr-3 sm:text-3xl md:text-6xl ">
            REQUEST A QUOTE
          </h1>
          <div className="relative flex flex-col bg-clip-border bg-[#111827]  text-gray-700 shadow-md w-full px-0  md:px-32  py-12 text-left bg-gray-white col-span-full rounded-xl lg:col-span-5 lg:px-7 lg:py-20 xl:col-span-4">
            <form
              action="#"
              onSubmit={(e) => {
                handleContactFormSubmit(e);
              }}
            >
              <div className="mb-4">
                <div className="relative w-full h-11 !min-w-full">
                  <input
                    required={true}
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    type="text"
                    name="Name"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown: placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md !text-white border-white focus:border-white"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                    Enter your name{" "}
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full  h-11 !min-w-full">
                  <input
                    required={true}
                    type="email"
                    name="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className=" peer w-full  bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md !text-white border-white focus:border-white"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                    Enter your email{" "}
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative w-full  sm:min-w-[200px]  ">
                  <textarea
                    name="Message"
                    value={message}
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                    className="extendable-textarea peer w-full  bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md !text-white border-white focus:border-white"
                    placeholder=" "
                  ></textarea>
                  <label className="flex w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                    Your message here{" "}
                  </label>
                </div>
              </div>

              <div className="under-container">
                {/* <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer p-3 rounded-full -ml-2.5"
                  for=":Ra:"
                >
                  <input
                   required={true}

                    type="checkbox"
                    className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[&#x27;&#x27;] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                    id=":Ra:"
                  />
                  <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="text-gray-700 font-light select-none cursor-pointer mt-px"
                  for=":Ra:"
                >
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-normal !text-gray-400">
                    You agree to{" "}
                    <a
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </label>
              </div> */}
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
                  type="submit"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
