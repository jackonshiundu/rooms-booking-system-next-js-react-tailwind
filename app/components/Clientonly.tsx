'use client';

import { useEffect, useState } from 'react';
interface ClientonlyProps {
  children: React.ReactNode;
}

const Clientonly: React.FC<ClientonlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default Clientonly;
