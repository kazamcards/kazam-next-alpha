// Imports for the brand logo:
import Image from "next/image";
import AccountButton from "../../public/images/Account.png";
import KazamLogo from "../../public/images/Kazam_Cards_trimmed.png";
import BasketButton from "../..//public/images/Basket.png";
import Link from "next/link";
// Imports to query the database:
import { allCategories } from "@/app/lib/AllCategories";
import { allEras } from "@/app/lib/AllEras";
// Imports for Components:
import CategoriesDropdown from "./CategoriesDropdown";
import ErasDropdown from "./ErasDropdown";
import { createClient } from "@/utils/supabase/server";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import AdminSignedIn from "./AdminSignedIn";
import NotAdmin from "./NotAdmin";

export default async function Header() {
  const categories = await allCategories();
  const eras = await allEras();
  console.log(categories);
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const displayName = data.user?.user_metadata.display_name;

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  console.log(data);

  return (
    <>
      <header>
        <Link href="/">
          <Image src={KazamLogo} alt="Picture of Logo" className="kazamLogo " />
        </Link>

        <div className="header-welcome flex flex-col gap-2 items-center border bg-[var(--secondary-uranian-blue)] p-2 shadow rounded-xl">
          <SignedIn>
            <span>Welcome {data.user?.email}</span>
          </SignedIn>
          <AdminSignedIn>
            <Link href="/admin">
              <div className="adminConsoleButton border p-2 shadow">
                <p>Admin Console</p>
              </div>
            </Link>
          </AdminSignedIn>
        </div>

        <div className="userHeaderContainer flex justify-center gap-5 shadow">
          <SignedOut>
            <Link href="/login">
              <Image
                src={AccountButton}
                alt="Icon representing user account"
                className="w-[2rem]"
              />
              <span>Login</span>
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-end gap-2 border rounded p-1">
              <Image
                src={AccountButton}
                alt="Icon representing user account"
                className="w-[2rem]"
              />
              <SignOut />
            </div>
          </SignedIn>

          <div className="flex items-end gap-2 border rounded p-1">
            <Image
              src={BasketButton}
              alt="Icon representing user basket"
              className="w-[2rem]"
            />
            <span>Your Basket</span>
          </div>
        </div>

        {/* <div className="flex flex-col items-center" id="description">
          <h1 className="text-base font-bold">Kazam Cards</h1>
          <p className="text-sm">Your one stop PKMN shop</p>
        </div> */}
      </header>
      <nav className="main-nav-bar flex justify-evenly top-0">
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
