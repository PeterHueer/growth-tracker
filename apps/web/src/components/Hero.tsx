import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid flex-grow place-items-center">
      <div className="grid grid-flow-col grid-cols-2 place-items-center space-x-10">
        <div className="border-white-500 flex h-full flex-col  rounded-2xl leading-8 text-gray-200">
          <h1 className="text-7xl">Track your growth to achieve your goals</h1>
          <div className="py-5" />
          <span className="text-gray-400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </span>
          <div className="py-5" />
          <div className="space-x grid w-2/3 grid-cols-2">
            <button className="bg-teal-500 p-3 text-white transition-colors ease-in-out hover:bg-teal-700">
              Getting started
            </button>
            <button className="text-white transition-colors ease-in-out hover:bg-gray-800">
              How it works
            </button>
          </div>
        </div>
        <div>
          <Image src="/images/hero.svg" width="753" height="486" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
