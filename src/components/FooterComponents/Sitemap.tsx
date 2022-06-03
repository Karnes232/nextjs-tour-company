import React from 'react';

import Link from 'next/link';

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="flex flex-col py-4 justify-between mx-8 md:flex-row md:max-w-2xl md:mx-auto">
        <Link href="/about" passHref>
          <p className="footerSitemap">About Us</p>
        </Link>
        <Link href="/fishing" passHref>
          <p className="footerSitemap">Fishing</p>
        </Link>
        <Link href="/saona" passHref>
          <p className="footerSitemap">Saona</p>
        </Link>
        <Link href="/contact" passHref>
          <p className="footerSitemap">Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Sitemap;
