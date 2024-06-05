import React from "react";
import NewProductForm from "@/components/NewProductForm";
import { allCategories } from "../lib/AllCategories";
import { allEras } from "../lib/AllEras";
import { allSets } from "../lib/AllSets";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AdminSignedIn from "@/components/AdminSignedIn";

export default async function Admin() {
  const categories = await allCategories();
  const eras = await allEras();
  const sets = await allSets();
  console.log(sets);
  return (
    <AdminSignedIn>
      <div className="App">
        <NewProductForm categories={categories} era={eras} set={sets} />
      </div>
    </AdminSignedIn>
  );
}
