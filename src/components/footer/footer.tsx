"use client";
import React from "react";

export const Footer = () => {
  return (
    <section
      className="h-[800px] w-full relative py-8"
      id="footer"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="mx-8 xl:mx-36 ">
        <div className="text-white text-4xl">
          <div className="w-3 h-3 my-4 bg-green-600"></div>[naTure]
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 my-32">
          <div>
            <div
              className="text-5xl md:text-6xl lg:text-7xl"
            >
              Nature is you,
            </div>
            <div
              className="text-5xl md:text-6xl lg:text-7xl"
            >
              Discover yourself.
            </div>
          </div>
          <div className="flex flex-1 md:justify-center text-start mt-8 md:0">
            <div>
              <p
                className="py-3"
              >
                Contact us:
              </p>
              <li
                className="mx-6"
              >
                Mail -- kumakogideon@gmail.com
              </li>
              <li
                className="mx-6"
              >
                Mobile -- +233 557 390 158
              </li>

              <p
                className="mt-6 py-3"
              >
                Location:
              </p>
              <li
                className="mx-6"
              >
                Head quarters -- Look within
              </li>
              <li
                className="mx-6"
              >
                Sub branch -- In your surroundings
              </li>
            </div>
          </div>
        </div>
        <div className="  mx-8 xl:mx-36 absolute bottom-0 right-0 left-0 py-12">
          <div className="text-white flex gap-4 items-center">
            <div className="w-3 h-3 my-4 bg-green-600"></div>
            <div>Designed By -- Virtuoso Creative Space</div>
          </div>
          <p> © 2024 Nature. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};
