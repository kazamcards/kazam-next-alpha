import { createClient } from "@/utils/supabase/server";

const SignedIn = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (data.user) {
    return <>{children}</>;
  }
};

export default SignedIn;
