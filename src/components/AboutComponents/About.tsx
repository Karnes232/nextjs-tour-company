import React from 'react';

import Image from 'next/image';

import GroupPng from '../../images/svg/group.png';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mx-2">
        <div className="h-10 w-16 rounded-full border-2 border-slate-800 mr-5 flex justify-center items-center">
          <Image
            src={GroupPng}
            alt="GroupPng"
            objectFit="cover"
            width={22}
            height={22}
            // objectPosition="50% 80%"
            className="opacity-70"
            priority
          />
        </div>

        <div className="">
          <h6 className="mb-2 font-semibold text-sm">SMALL GROUPS</h6>
          <p className="text-xs">
            With a maximum of 16 people, our small group tours make for a far
            better travel experience.
          </p>
        </div>
      </div>
      About
    </div>
  );
};

export default About;
