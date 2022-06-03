import React from 'react';

import Link from 'next/link';

const Links = () => {
  return (
    <>
      <Link href="/about" passHref>
        <button className="navLinks">About Us</button>
      </Link>
      <Link href="/fishing" passHref>
        <button className="navLinks">Fishing</button>
      </Link>
      <Link href="/saona" passHref>
        <button className="navLinks">Saona</button>
      </Link>
      <Link href="/contact" passHref>
        <button className="navLinks">Contact Us</button>
      </Link>
    </>
  );
};

export default Links;
