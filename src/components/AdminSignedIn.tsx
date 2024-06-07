import { createClient } from "@/utils/supabase/server";
import { adminEmails } from "@/adminEmails";

const AdminSignedIn = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const aEmails = await adminEmails();

  const userEmail = data.user?.email;
  if (typeof userEmail === "string" && aEmails.includes(userEmail)) {
    return <>{children}</>;
  }
  return null;
};

export default AdminSignedIn;
