import Link from "next/link";
import { allCategories } from "../lib/AllCategories";
import { slugify } from "../lib/slugify";

export default async function CategoriesPage() {
  const categories = await allCategories();
  return (
    <div className="flex flex-col items-center">
      <h2>Welcome to the Categories page!</h2>
      <p>We&apos;ve got:</p>
      <div className="categories-list flex flex-col justify-start gap-2 mt-4 mb-4 p-4 border">
        {categories.map((cat) => {
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}/${slugify(cat.category_name)}`}
              className="nav-link p-2 bg-[var(--secondary-uranian-blue)]"
            >
              {cat.category_name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
