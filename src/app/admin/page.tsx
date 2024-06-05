import React from "react";
import NewProductForm from "@/components/NewProductForm";
import { allCategories } from "../lib/AllCategories";
import { allEras } from "../lib/AllEras";
import { allSets } from "../lib/AllSets";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AdminSignedIn from "@/components/AdminSignedIn";
import NotAdmin from "@/components/NotAdmin";
import Link from "next/link";
import SignedOut from "@/components/SignedOut";
import Denied from "@/components/Denied";

export default async function Admin() {
  const categories = await allCategories();
  const eras = await allEras();
  const sets = await allSets();
  console.log(sets);
  return (
    <>
      <AdminSignedIn>
        <div className="App">
          <NewProductForm categories={categories} era={eras} set={sets} />
        </div>
      </AdminSignedIn>
      <NotAdmin>
        <Denied />
      </NotAdmin>
      <SignedOut>
        <Denied />
      </SignedOut>
    </>
  );
}
