import React from "react";

const Footer = () => {
  return (
    <>
      <footer class=" bg-[#fff] text-black rounded-t-[50px]">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h2 className="text-2xl pb-5 font-bold">get in touch</h2>
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a class="flex items-center">support@mean.in</a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                <ul class=" font-medium">
                  <li>
                    <a class="hover:underline">Home</a>
                  </li>
                  <li>
                    <a class="hover:underline">Work</a>
                  </li>
                  <li>
                    <a class="hover:underline">Expertise</a>
                  </li>
                  <li>
                    <a class="hover:underline">Our Process</a>
                  </li>
                  <li>
                    <a class="hover:underline">About us</a>
                  </li>
                  <li>
                    <a class="hover:underline">contact us</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul class=" font-medium">
                  <li>
                    <a
                      href="https://x.com/Bolthacker1"
                      class="hover:underline "
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/sanjay-mali"
                      class="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sanjay-mali-dev"
                      class="hover:underline "
                    >
                      Linkedin
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://codepen.io/sanjay-Mali/"
                      class="hover:underline "
                    >
                      Codepan
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="sm:flex sm:items-center sm:justify-between">
            <img src="namedLogo.png" className="h-14" alt="" />
            <span class="text-sm  sm:text-center ">© Mean 2024 </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
