// Imports for the brand logo:
import Image from "next/image";
import KazamLogo from "../../public/images/Kazam_Cards_edited.png";
import Link from "next/link";
// Imports to query the database:
import { allCategories } from "@/app/lib/AllCategories";
import { allEras } from "@/app/lib/AllEras";
// Imports for Components:
import CategoriesDropdown from "./CategoriesDropdown";
import ErasDropdown from "./ErasDropdown";

export default async function Header() {
  const categories = await allCategories();
  console.log(categories);
  const eras = await allEras();
  console.log(eras);

  return (
    <>
      <header className=" items-center py-4 px-8">
        <div>
          <a href="/">
            <Image
              src={KazamLogo}
              alt="Picture of Logo"
              className="h-[5rem] w-auto"
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Kazam Cards</h1>
          <p>Your one stop PKMN shop</p>
        </div>
      </header>
      <nav className="flex justify-evenly">
        <Link className="nav-link" href="/">
          Homey Home Page
        </Link>
        <CategoriesDropdown categories={categories} />
        <ErasDropdown eras={eras} />
        <Link className="nav-link" href="/about">
          About
        </Link>
      </nav>
    </>
  );
}
