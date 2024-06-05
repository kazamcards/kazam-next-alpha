"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import DropDownLink from "./DropDownLink";

export default function ErasDropdown({ eras }) {
  // Handles drop down menu being visible
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsDropdownOpen(false);
    }
  };

  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault(); // Prevent default navigation on click for mobile
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleClickOutside = (event) => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile && isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobile, isDropdownOpen]);

  return (
    <>
      {/* Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={"/eras"}
          className="nav-link cursor-pointer"
          onClick={handleClick}
        >
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
