import { createClient } from "@/utils/supabase/server";
import { adminEmails } from "@/adminEmails";

const NotAdmin = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const userEmail = data.user?.email;
  if (typeof userEmail === "string" && !adminEmails.includes(userEmail)) {
    return <>{children}</>;
  }
  return null;
};

export default NotAdmin;
