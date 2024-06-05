"use server";

import { createClient } from "@/utils/supabase/server";

export const signOutUser = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  return { error };
};
