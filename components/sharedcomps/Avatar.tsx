import { UserButton } from "@clerk/nextjs";
import React from "react";

const avatar = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default avatar;
