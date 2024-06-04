"use client";
import Link from "next/link";
import { useState } from "react";
import DropDownLink from "./DropDownLink";

export default function ErasDropdown({ eras }) {
  // Handles drop down menu being visible

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Dropdown */}
      <div
        className="relative place-content-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={"/eras"} className="nav-link cursor-pointer">
          Eras
        </Link>

        {isDropdownOpen && (
          <DropDownLink dropdowns={eras} typeKey="eras" nameKey="era_name" />
        )}
      </div>
      {/* End of Dropdown */}
    </>
  );
}
