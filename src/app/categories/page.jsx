import Link from "next/link";
import { allCategories } from "../lib/AllCategories";
import { slugify } from "../lib/slugify";

export default async function CategoriesPage() {
  const categories = await allCategories();
  console.log(categories);
  return (
    <>
      <h2>Welcome to the Categories page!</h2>
      <p>Categories are:</p>
      {categories.map((cat) => {
        return (
          <div key={cat.id}>
            <Link href={`/categories/${cat.id}/${slugify(cat.category_name)}`}>
              {cat.category_name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
