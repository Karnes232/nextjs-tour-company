import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import logoImage from '../../images/logo-travel-y-tour.png';

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/')}
      className="relative lg:inline-grid w-24 h-24 cursor-pointer"
    >
      <Image
        src={logoImage}
        alt="Hello World"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};

export default Logo;
