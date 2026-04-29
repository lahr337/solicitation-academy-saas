import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { UploadForm } from "./upload-form";

export default async function UploadPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check user has completed 101_cap
  const { data: capstone } = await supabase
    .from("module_progress")
    .select("status")
    .eq("user_id", user.id)
    .eq("module_id", "101_cap")
    .single();

  if (capstone?.status !== "complete") {
    redirect("/dashboard");
  }

  return (
    <div className="px-space-14 py-space-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-space-8">
          <div className="flex items-center gap-2 mb-space-4">
            <div
              className="w-5 h-px bg-primary"
            />
            <span className="meta text-primary">
              LIVE ANALYSIS
            </span>
          </div>
          <h1 className="display-l text-ink mb-space-3">
            Upload a solicitation
          </h1>
          <p className="body-l text-ink-soft max-w-2xl">
            Drop a DLA DIBBS solicitation
            PDF and get a complete 14-tab
            breakdown powered by AI. Takes
            60-90 seconds.
          </p>
        </div>

        <UploadForm />
      </div>
    </div>
  );
}