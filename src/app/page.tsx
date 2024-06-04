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

export default function Home() {
  return (
    <>
      <main>
        <h2 className="text-center"> Recently Added</h2>
        <div className="recently-added border border-black  h-auto overflow-scroll">
          <div className="recently-added-container flex flex-row gap-2 pl-2 pb-4">
            <ProductDisplay fetchProducts={recentlyAdded} />
          </div>
        </div>
        <h2 className="text-center"> Top Sellers </h2>
        <div className="top-sellers border border-black h-96 overflow-scroll">
          <h3>
            This is currently showing all products only from Sword and Shield
            era
          </h3>
          <div className="recently-added-container flex flex-row gap-2 pl-2 pb-4">
            <ProductDisplay fetchProducts={async () => await queryEra(2)} />
          </div>
        </div>
      </main>
    </>
  );
}
