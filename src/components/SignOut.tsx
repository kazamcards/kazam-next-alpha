"use client";
import React from "react";
import { signOutUser } from "./SignOutServer"; // Adjust the import path as necessary

const SignOut = () => {
  const handleSignOut = async () => {
    const { error } = await signOutUser();
    if (error) {
      console.error("Sign out error:", error);
    } else {
      console.log("Signed out successfully");
    }
  };

  return (
    <p style={{ cursor: "pointer" }} onClick={handleSignOut}>
      Signout
    </p>
  );
};

export default SignOut;
