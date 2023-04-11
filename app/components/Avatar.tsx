import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  return (
    <Image
      className="rounded-full "
      alt="avatar"
      src="/images/placeholder.jpg"
      height="25"
      width="25"
    />
  );
};

export default Avatar;
