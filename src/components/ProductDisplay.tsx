// --- --- Main Product Display component --- ---
// This image is temporary until we figure out individual product images:
import TestPack from "../../public/images/test-pack.webp";
import Image from "next/image";
// Typing import:
import { Product } from "./types";

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
            className="product-card flex flex-col items-center border pt-1 rounded-xl bg-yellow-300 
            object-position: center;"
            key={product.id}
          >
            <a href={`/product/${encodeURIComponent(product.id)}`}>
              <Image src={TestPack} alt={"test image"} height={150} />
            </a>
            <div className="product-text flex flex-col gap-2 justify-start w-full border-t border-b mt-1 mb-1">
              {" "}
              <p>{product.era}</p>
              <p>{product.set}</p>
              <p>{product.product_name}</p>
            </div>

            {product.inventory > 0 ? (
              <p>{product.inventory} in stock</p>
            ) : (
              <p className="bg-red-500 text-white text-center w-full">
                {" "}
                Sold out!{" "}
              </p>
            )}

            <p>£{product.price}</p>
            {product.inventory > 0 ? (
              <p className="bg-[var(--tertiary-coral-orange)]  text-center">
                ADD TO BASKET BUTTON
              </p>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
