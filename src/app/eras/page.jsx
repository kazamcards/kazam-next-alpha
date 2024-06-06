import Link from "next/link";
import { allEras } from "../lib/AllEras";
import { slugify } from "../lib/slugify";

export default async function ErasPage() {
  const eras = await allEras();
  return (
    <div className="flex flex-col items-center">
      <h2>Welcome to the Eras page!</h2>
      <p>We&apos;ve got:</p>
      <div className="categories-list flex flex-col justify-start gap-2 mt-4 mb-4 p-4 border">
        {eras.map((era) => {
          return (
            <Link
              key={era.id}
              href={`/eras/${era.id}/${slugify(era.era_name)}`}
              className="nav-link p-2 bg-[var(--secondary-uranian-blue)]"
            >
              {era.era_name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
