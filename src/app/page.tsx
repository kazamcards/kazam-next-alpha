// --- --- Home Page --- ---
// --- Component Imports:
import ProductDisplay from "@/components/ProductDisplay";
import Footer from "@/components/footer";

// --- Database query modules:
// This import specifically gets the database query string which finds the 10 most recently added products:
import { queryEra } from "./lib/EraProducts";
import { recentlyAdded } from "./lib/RecentlyAdded";

export default function Home() {
  return (
    <>
      <main>
        <div className="recently-added border border-black  h-auto overflow-scroll">
          <h1> Recently Added</h1>
          <div className="recently-added-container flex flex-row gap-2 pl-2 pb-4">
            <ProductDisplay fetchProducts={recentlyAdded} />
          </div>
        </div>
        <div className="top-sellers border border-black h-96 overflow-scroll">
          <h1> Top Sellers </h1>
          <h1>
            This is currently showing all products only from Sword and Shield
            era
          </h1>
          <div className="recently-added-container flex flex-row gap-2 pl-2 pb-4">
            <ProductDisplay fetchProducts={async () => await queryEra(2)} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
