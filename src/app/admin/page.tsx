import React from "react";
import NewProductForm from "@/components/NewProductForm";
import { allCategories } from "../lib/AllCategories";
import { allEras } from "../lib/AllEras";
import { allSets } from "../lib/AllSets";

export default async function Admin() {
  const categories = await allCategories();
  const eras = await allEras();
  const sets = await allSets();
  console.log(sets);

  return (
    <div className="App">
      <NewProductForm categories={categories} era={eras} set={sets} />
    </div>
  );
}
