import Image from 'next/image';
import React from 'react';

interface avatarProps {
  src: string | null | undefined;
}
const Avatar: React.FC<avatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full "
      alt="avatar"
      src={src || '/images/placeholder.jpg'}
      height="25"
      width="25"
    />
  );
};

export default Avatar;
