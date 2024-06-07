// --- --- Home Page --- ---
// --- Component Imports:
import ProductDisplay from "@/components/ProductDisplay";
import Footer from "@/components/footer";
import Link from "next/link";
import { Product } from "../components/types";

// --- Database query modules:
// This import specifically gets the database query string which finds the 10 most recently added products:
import { queryEra } from "./lib/EraProducts";
import { recentlyAdded } from "./lib/RecentlyAdded";
import PokeballSpinner from "@/components/PokeballSpinner";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Recently Added</h2>

        <div className="recently-added border-4 border-black h-auto overflow-scroll p-4 bg-[--secondary-uranian-blue]">
          <div className="recently-added-container flex flex-row gap-4 ">
            <ProductDisplay fetchProducts={recentlyAdded} />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold my-4">
          Current Sword & Shield Products
        </h2>
        <h3 className="text-center">
          This is currently showing all products only from Sword and Shield era
        </h3>
        <div className="top-sellers border-4 border-black overflow-scroll p-4  bg-[--secondary-uranian-blue]">
          <div className="recently-added-container flex flex-row gap-4">
            <ProductDisplay fetchProducts={async () => await queryEra(2)} />
          </div>
        </div>
      </main>
    </>
  );
}
