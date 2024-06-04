import React from "react";
import NewProductForm from "@/components/NewProductForm";
import { allCategories } from "../lib/AllCategories";
import { allEras } from "../lib/AllEras";
import { allSets } from "../lib/AllSets";

export default async function Admin() {
  const categories = allCategories();
  const eras = allEras();
  const sets = await allSets();
  console.log(sets);

  return (
    <div className="App">
      <NewProductForm />
    </div>
  );
}
