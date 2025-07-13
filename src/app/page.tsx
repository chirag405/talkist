import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import HomeView from "@/modules/home/ui/views/home-view";

export default async function RootPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If user is authenticated, redirect to dashboard
  if (session?.user) {
    redirect("/meetings");
  }

  // If not authenticated, show the landing page
  return <HomeView />;
}
