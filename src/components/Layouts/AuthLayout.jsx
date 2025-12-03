import React from 'react';
import Logo from "../Elements/Logo";

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm px-6">
        <Logo />
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
