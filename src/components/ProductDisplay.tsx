// --- --- Main Product Display component --- ---
// This image is temporary until we figure out individual product images:
import TestPack from "../../public/images/test-pack.webp";
import Image from "next/image";
// Typing import:
import { Product } from "./types";
import Link from "next/link";

// This component will change what it displays depending on the Props it receives.
// The 'fetchProducts' prop is a function call to the database, which is passed in from whichever parent is calling this component:
export default async function ProductDisplay(props: {
  fetchProducts: () => Promise<Product[]>;
}) {
  const response = await props.fetchProducts();
  const productData: Product[] = response;

  if (productData.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <>
      {productData.map((product) => {
        return (
          <div
            className="product-card flex flex-col items-center justify-between pt-1 rounded-xl bg-[#f6e61f] shadow-xl border-4 border-black"
            key={product.id}
          >
            <Link
              href={`/product/${product.id}`}
              className="flex flex-col items-center justify-start"
            >
              <Image
                src={TestPack}
                alt={"test image"}
                height={150}
                className="product-image rounded shadow-2xl"
              />

              <p className="text-lg text-center h-12 m-2">
                {product.product_name}
              </p>

              <div className="product-text flex flex-col gap-2 justify-start items-center w-full border-t border-b h-24 mt-1 mb-1">
                <p>Pokémon {product.era}</p>
                <p className="text-center">
                  {product.set} {product.category}
                </p>
              </div>

              {product.inventory > 0 ? (
                <p>{product.inventory} in stock</p>
              ) : (
                <p className="bg-red-700 text-white text-center w-full ">
                  Sold out!
                </p>
              )}

              <p>£{product.price}</p>
            </Link>

            {product.inventory > 0 ? (
              <button className="basket-button bg-[#cc05fb] text-center p-2 border-4 border-black rounded-2xl text-white">
                ADD TO BASKET
              </button>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
