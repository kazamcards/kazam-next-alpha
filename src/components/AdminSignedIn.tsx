import { createClient } from "@/utils/supabase/server";

const AdminSignedIn = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (data.user?.email === "isaacdalglish03@gmail.com" || "") {
    return <>{children}</>;
  }
};

export default AdminSignedIn;
