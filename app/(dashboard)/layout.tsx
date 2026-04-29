import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: progress } = await supabase
    .from("module_progress")
    .select("*")
    .eq("user_id", user.id);

  return (
    <div className="min-h-screen flex bg-bg">
      <Sidebar
        profile={profile}
        progress={progress || []}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          profile={profile}
          progress={progress || []}
        />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}