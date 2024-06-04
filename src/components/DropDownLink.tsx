"use client";
import { slugify } from "@/app/lib/slugify";
import Link from "next/link";

export default function DropDownLink({ dropdowns, typeKey, nameKey }) {
  return (
    <div className="absolute top-full left-[-50%] min-w-max bg-[var(--tertiary-madder-red)] shadow-lg rounded-xl">
      <ul>
        {dropdowns.map((drop) => (
          <li key={drop.id}>
            <Link
              href={`/${typeKey}/${drop.id}/${slugify(drop[nameKey])}`}
              className="block py-2 px-4 hover:bg-[var(--tertiary-coral-orange)]"
            >
              {drop[nameKey]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
