import Link from "next/link";
import { allEras } from "../lib/AllEras";
import { slugify } from "../lib/slugify";

export default async function ErasPage() {
  const eras = await allEras();
  console.log(eras);
  return (
    <>
      <h2>Welcome to the Eras page!</h2>
      <p>Eras are:</p>
      {eras.map((era) => {
        return (
          <div key={era.id}>
            <Link href={`/eras/${era.id}/${slugify(era.era_name)}`}>
              {era.era_name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
