"use client";
import Link from "next/link";
import { useState } from "react";
import DropDownLink from "./DropDownLink";

// Slugify function. Bit of nice UI so the user can see where they are in the URL. Thanks GPT.
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export default function CategoriesDropdown({ categories }) {
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
        <Link href={"/categories"} className="nav-link cursor-pointer">
          Categories
        </Link>

        {isDropdownOpen && (
          <DropDownLink
            dropdowns={categories}
            typeKey="categories"
            nameKey="category_name"
          />
        )}
      </div>
      {/* End of Dropdown */}
    </>
  );
}
