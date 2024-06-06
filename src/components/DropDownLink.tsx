"use client";
import { slugify } from "@/app/lib/slugify";
import Link from "next/link";

export default function DropDownLink({
  dropdowns,
  typeKey,
  nameKey
}: {
  dropdowns: any;
  typeKey: string;
  nameKey: string;
}) {
  return (
    <div className="dropdown-menu absolute bg-[var(--tertiary-madder-red)] shadow-lg rounded-xl z-50">
      <ul>
        <Link
          href={`/${typeKey}`}
          className="block py-2 px-4 text-white hover:bg-[var(--tertiary-coral-orange)] capitalize"
        >
          All {`${typeKey}`}
        </Link>
        {dropdowns.map((drop: any) => (
          <li key={drop.id}>
            <Link
              href={`/${typeKey}/${drop.id}/${slugify(drop[nameKey])}`}
              className="block py-2 px-4 text-white hover:bg-[var(--tertiary-coral-orange)] "
            >
              {drop[nameKey]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
