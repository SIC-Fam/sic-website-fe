import React, { ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();

  return (
    <div className="wrapper py-10 flex flex-col min-h-screen">
      <div className="w-16 h-10 relative mb-8">
        <Image fill src="/images/logo.png" alt="logo" onClick={() => router.push('/')} className="cursor-pointer" />
      </div>
      <div className="grid place-items-center flex-1">
        <div className="w-full max-w-[480px] m-2 bg-dark-light p-6 sm:p-8 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
