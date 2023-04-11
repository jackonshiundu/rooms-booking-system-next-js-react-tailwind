'use client';
import { ContainerProps } from 'postcss';

interface ConatinerProps {
  children: React.ReactNode;
}
const Container: React.FC<ConatinerProps> = ({ children }) => {
  return (
    <div className="max-w-[2528px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
