import React from 'react';

import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="border-b border-gray-500 md:border-none">
      <div className="flex py-4 justify-between mx-8 md:max-w-md md:mx-auto">
        <Link href="https://www.facebook.com/" passHref>
          <FaFacebookF className="footerIcons" />
        </Link>
        <Link href="https://twitter.com/" passHref>
          <FaTwitter className="footerIcons" />
        </Link>
        <Link href="https://www.pinterest.com/" passHref>
          <FaPinterestP className="footerIcons" />
        </Link>
        <Link href="https://instagram.com/" passHref>
          <FaInstagram className="footerIcons" />
        </Link>
        <Link href="https://youtube.com/" passHref>
          <FaYoutube className="footerIcons" />
        </Link>
        <Link href="https://www.tiktok.com/" passHref>
          <FaTiktok className="footerIcons" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
