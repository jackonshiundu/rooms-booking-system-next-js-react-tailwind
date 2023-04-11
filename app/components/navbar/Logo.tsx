'use client';

import Image from 'next/image';

function Logo() {
  return (
    <Image
      alt="logo"
      className="block cursor-pointer"
      height="175"
      width="80"
      src="/images/logo.png"
    />
  );
}

export default Logo;
