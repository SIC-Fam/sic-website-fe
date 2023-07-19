import React, { ReactNode } from 'react';
import Image from 'next/image';

interface AuthLaytoutProps {
  children: ReactNode;
}
const AuthLaytout = ({ children }: AuthLaytoutProps) => {
  return (
    <div className="wrapper py-10 flex flex-col min-h-screen">
      <div className="w-16 h-10 relative">
        <Image fill src="/images/logo.png" alt="logo" />
      </div>
      <div className="grid place-items-center flex-1">
        <div className="w-full max-w-[480px] m-2 bg-dark-light p-8 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLaytout;
