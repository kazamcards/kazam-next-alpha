import Image from "next/image";
import KazamLogo from "../../public/images/Kazam_Cards_edited.png";
import Link from "next/link";

export default function Header() {
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
          <p>your one stop PKMN shop</p>
        </div>
      </header>
      <nav className="flex justify-evenly">
        <Link className="nav-link" href="/">
          Homey Home Page
        </Link>
        <Link className="nav-link" href="/categories">
          Categories
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
      </nav>
    </>
  );
}
