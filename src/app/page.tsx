import ProductDisplay from "@/components/ProductDisplay";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <main>
        <div className="recently-added border border-black  h-auto overflow-scroll">
          <h1> Recently Added</h1>
          <div className="recently-added-container flex flex-row gap-2 pl-2 pb-4">
            {" "}
            <ProductDisplay />
          </div>
        </div>
        <div className="top-sellers border border-black h-96">
          <h1> Top Sellers </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
