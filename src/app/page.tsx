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
      <main className="bg-gray-100 min-h-screen p-4">
        <h2 className="text-center text-2xl font-bold mb-4">Recently Added</h2>
        <div className="recently-added border-4 border-black h-auto overflow-scroll p-4 bg-white">
          <div className="recently-added-container flex flex-row gap-4">
            <ProductDisplay fetchProducts={recentlyAdded} />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold my-4">Top Sellers</h2>
        <div className="top-sellers border-4 border-black h-96 overflow-scroll p-4 bg-white">
          <h3 className="mb-4">
            This is currently showing all products only from Sword and Shield era
          </h3>
          <div className="recently-added-container flex flex-row gap-4">
            <ProductDisplay fetchProducts={async () => await queryEra(2)} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
