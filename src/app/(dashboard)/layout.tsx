import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect to sign-in if no session
  if (!session?.user) {
    redirect("/sign-in");
  }

  const user = {
    name: session.user.name || "User",
    email: session.user.email || "user@example.com",
    image: session.user.image || undefined,
  };

  return (
    <SidebarProvider>
      <DashboardSidebar user={user} />
      <SidebarInset>
        <main className="flex-1 overflow-auto">
          <DashboardNavbar />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
