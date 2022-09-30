import React from "react";
import Image from "next/image";

export default function TeamGrowthPage(props) {
  return (
    <div>
      <h1 className="text-3xl text-white">Forecast</h1>
      <div className="grid grid-cols-4 space-x-2">
        <div className="rounded border-b-2 border-t-2 border-teal-600 bg-white bg-transparent text-white shadow-lg shadow-teal-500/50">
          <div className="relative flex w-full flex-col place-items-center">
            <Image
              className="absolute top-5 rounded-full"
              width={200}
              height={200}
              alt="profile image"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGCJzY3EaoW6g/profile-displayphoto-shrink_200_200/0/1640899190625?e=1669248000&v=beta&t=CY4LKuistXCA0v3d9ltCIF3y5GYz8UYHBdRESzLpF34"
            />
            <h1 className="text-2xl">Peter Hüer</h1>
          </div>
          <div>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
