// Imports for the brand logo:
import Image from "next/image";
import AccountButton from "../../public/images/Account.png";
import KazamLogo from "../../public/images/Kazam_Cards_edited.png";
import BasketButton from "../..//public/images/Basket.png";
import Link from "next/link";
// Imports to query the database:
import { allCategories } from "@/app/lib/AllCategories";
import { allEras } from "@/app/lib/AllEras";
// Imports for Components:
import CategoriesDropdown from "./CategoriesDropdown";
import ErasDropdown from "./ErasDropdown";

export default async function Header() {
  const categories = await allCategories();
  const eras = await allEras();

  return (
    <>
      <header>
        <div id="topButtons">
          <Image
            src={AccountButton}
            alt="Icon representing user account"
            className="h-[2.5rem] w-auto left-0 padding-0"
          />
          <Image
            src={BasketButton}
            alt="Icon representing user basket"
            className="h-[2rem] w-auto right-0"
          />
        </div>
        <div id="kazamLogo">
          <Link href="/">
            <Image src={KazamLogo} alt="Picture of Logo" className=" w-auto" />
          </Link>
        </div>
        <div className="flex flex-col items-center" id="description">
          <h1 className="text-base font-bold">Kazam Cards</h1>
          <p className="text-sm">Your one stop PKMN shop</p>
        </div>
      </header>
      <nav className="flex justify-evenly">
        <Link className="nav-link" href="/">
          Home
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
