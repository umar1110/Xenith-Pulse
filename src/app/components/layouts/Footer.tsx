function Footer() {
  return (
    <div className="w-[80%] bg-black mx-auto flex flex-col items-center space-y-2   py-8 md:w-[60%] ">
      <p className="footer-para  text-center text-white mx-auto lg:w-[40%]  ">
        Stay updated on our exclusive offers by subscribing to our weekly
        newsletter! Sign up today to receive the latest deals, news, and
        insights straight to your inbox.
      </p>
      {/* \section 2 */}
      <div className="part-2-footer w-full text-center space-y-5 pt-5   lg:flex  lg:mt-6 justify-between   items-center ">
        <div className="lg:w-1/2 w-full  h-full ">
          <input
            type="email"
            name="Email"
            id="emai"
            className="bg-[#333333] text-xl  px-6 h-[100%] py-4 text-white rounded-2xl  "
            placeholder="Enter your work email"
          />
        </div>
        <div className="w-[80%] mx-auto mt-4 lg:w-[30%] !min-h-full  lg:!mb-3">
          <button
            style={{
              background:
                "linear-gradient(to right, #FF2DF7, #A816FB ,#5200FF)",
            }}
            className="text-lg h-full w-full text-white  font-bold rounded-full bg-red-300  mx-auto py-3 text-center  "
          >
            Get in touch
          </button>
        </div>
      </div>
      {/* Sectiopn 3 */}
      <div className="iconsandline w-full">
        <div className="w-full h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF]  to-[#FF2DF7] mx-auto my-20 rounded-[100%] opacity-70 " />

        <div className="icons w-fit mx-auto  flex h-10 space-x-2">
          {/* fb */}
          <a href="https://www.facebook.com/profile.php?id=61560003014257&mibextid=ZbWKwL" className=" w-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              id="facebook"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              ></path>
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              ></path>
            </svg>
          </a>
          {/* insta */}
          <a href="https://www.instagram.com/xenith_pulse?igsh=MW1tajFzZTMxMWliOA==" className=" w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.87 28.87"
            id="instagram"
          >
            <defs>
              <linearGradient
                id="a"
                x1="-1.84"
                x2="32.16"
                y1="30.47"
                y2="-3.03"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fed576"></stop>
                <stop offset=".26" stopColor="#f47133"></stop>
                <stop offset=".61" stopColor="#bc3081"></stop>
                <stop offset="1" stopColor="#4c63d2"></stop>
              </linearGradient>
            </defs>
            <g>
              <g>
                <rect
                  width="28.87"
                  height="28.87"
                  fill="url(#a)"
                  rx="6.48"
                  ry="6.48"
                ></rect>
                <g>
                  <path
                    fill="#fff"
                    d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          </a>
          
          {/* Linkedin */}
          <a href="https://www.linkedin.com/company/xenithpulse/" className=" w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.87 28.87"
            id="linkedin"
          >
            <g>
              <g>
                <rect
                  width="28.87"
                  height="28.87"
                  fill="#0b86ca"
                  rx="6.48"
                  ry="6.48"
                ></rect>
                <path
                  fill="#fff"
                  d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                ></path>
              </g>
            </g>
          </svg>
          </a>
          {/* twitter
          <a href="https://www.linkedin.com/company/xenithpulse/" className=" w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.87 28.87"
            id="twitter"
          >
            <g>
              <g>
                <rect
                  width="28.87"
                  height="28.87"
                  fill="#00c7ff"
                  rx="6.48"
                  ry="6.48"
                ></rect>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M11.74 18.11a3.29 3.29 0 0 1-3.05-2.28 3.26 3.26 0 0 0 1.41 0A3.28 3.28 0 0 1 8 14.26a3.18 3.18 0 0 1-.48-1.75 3.24 3.24 0 0 0 1.46.4 3.3 3.3 0 0 1-1.35-2A3.25 3.25 0 0 1 8 8.54 9.39 9.39 0 0 0 14.76 12c0-.13 0-.24-.05-.36a3.28 3.28 0 0 1 5.58-2.74.17.17 0 0 0 .17.05 6.6 6.6 0 0 0 1.91-.73A3.36 3.36 0 0 1 21 10a6.3 6.3 0 0 0 1.83-.49l-.33.49a6.44 6.44 0 0 1-1.19 1.13.11.11 0 0 0-.05.1 9.09 9.09 0 0 1-.06 1.46 9.66 9.66 0 0 1-.85 2.92 9.44 9.44 0 0 1-1.77 2.59 8.77 8.77 0 0 1-4.51 2.51 9.79 9.79 0 0 1-1.83.22A9.27 9.27 0 0 1 7 19.52l-.08-.05a6.64 6.64 0 0 0 3.26-.47 6.53 6.53 0 0 0 1.56-.89z"
                ></path>
              </g>
            </g>
          </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
