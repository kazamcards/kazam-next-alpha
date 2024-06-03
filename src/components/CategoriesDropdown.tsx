"use client";
import Link from "next/link";
import { useState } from "react";

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
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={"/categories"}
          className="nav-link cursor-pointer hover:bg-[var(--tertiary-coral-orange)]"
        >
          Categories
        </Link>
        {isDropdownOpen && (
          <div className="absolute top-full left-[-100%] min-w-max bg-white shadow-lg">
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.id}/${slugify(
                      category.category_name
                    )}`}
                    className="block py-2 px-4 hover:bg-[var(--tertiary-coral-orange)]"
                  >
                    {category.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* End of Dropdown */}
    </>
  );
}