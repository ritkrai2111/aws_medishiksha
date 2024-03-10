import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex align-middle bg-gray-100 mt-24 items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
