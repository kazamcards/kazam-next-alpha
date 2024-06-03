"use client";
import Link from "next/link";
import { useState } from "react";

// Slugify function. Thanks GPT
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

export default function ErasDropdown({ eras }) {
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
          href={"/eras"}
          className="nav-link cursor-pointer hover:bg-[var(--tertiary-coral-orange)]"
        >
          Eras
        </Link>
        {isDropdownOpen && (
          <div className="absolute top-full left-[-100%] min-w-max bg-white shadow-lg">
            <ul>
              {eras.map((era) => (
                <li key={era.id}>
                  <Link
                    href={`/eras/${era.id}/${slugify(era.era_name)}`}
                    className="block py-2 px-4 hover:bg-[var(--tertiary-coral-orange)]"
                  >
                    {era.era_name}
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
