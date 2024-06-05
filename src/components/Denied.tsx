import React from "react";
import Link from "next/link";
const Denied = () => {
  return (
    <>
      <h1>You are not allowed to view this.</h1>
      <Link href="/">Go back to Home</Link>
    </>
  );
};

export default Denied;
