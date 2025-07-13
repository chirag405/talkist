"use client";

import { GeneratedAvatar } from "@/components/generated-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronUp, CreditCard, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DashboardUserButtonProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

const UserMenuContent = ({
  user,
  onLogout,
}: {
  user: DashboardUserButtonProps["user"];
  onLogout: () => void;
}) => (
  <>
    <div className="flex items-center gap-2 p-2">
      <GeneratedAvatar name={user.name} email={user.email} size={32} />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{user.name}</span>
        <span className="text-xs text-gray-500">{user.email}</span>
      </div>
    </div>
    <div className="border-t border-gray-200 my-2" />
    <div className="flex flex-col gap-1 p-2">
      <Button
        variant="ghost"
        className="justify-start text-gray-700 hover:bg-gray-50"
      >
        <CreditCard className="mr-2 h-4 w-4" />
        Billing
      </Button>
      <div className="border-t border-gray-200 my-2" />
      <Button
        variant="ghost"
        onClick={onLogout}
        className="justify-start text-gray-700 hover:bg-gray-50"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  </>
);

export function DashboardUserButton({ user }: DashboardUserButtonProps) {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = async () => {
    try {
      console.log("Starting logout process...");
      await authClient.signOut();
      console.log("SignOut successful, redirecting...");
      setDrawerOpen(false);
      // Use window.location instead of router.push for a full page reload
      window.location.href = "/sign-in";
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: still redirect even if signOut fails
      window.location.href = "/sign-in";
    }
  };

  // Debug click handler
  const handleButtonClick = () => {
    console.log("User button clicked, isMobile:", isMobile);
    if (isMobile) {
      setDrawerOpen(true);
    }
  };

  if (isMobile) {
    return (
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-3 py-2 h-auto text-emerald-50 hover:text-white hover:bg-emerald-700/50"
            onClick={handleButtonClick}
          >
            <GeneratedAvatar name={user.name} email={user.email} size={32} />
            <div className="flex flex-col items-start text-left flex-1 min-w-0">
              <span className="text-sm font-medium truncate">{user.name}</span>
              <span className="text-xs text-emerald-200 truncate">
                {user.email}
              </span>
            </div>
            <ChevronUp className="h-4 w-4 text-emerald-200" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Account</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <UserMenuContent user={user} onLogout={handleLogout} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 px-3 py-2 h-auto text-emerald-50 hover:text-white hover:bg-emerald-700/50"
        >
          <GeneratedAvatar name={user.name} email={user.email} size={32} />
          <div className="flex flex-col items-start text-left flex-1 min-w-0">
            <span className="text-sm font-medium truncate">{user.name}</span>
            <span className="text-xs text-emerald-200 truncate">
              {user.email}
            </span>
          </div>
          <ChevronUp className="h-4 w-4 text-emerald-200" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 mb-2 bg-white border border-gray-200 shadow-lg"
        side="top"
      >
        <div className="flex items-center gap-2 p-2">
          <GeneratedAvatar name={user.name} email={user.email} size={32} />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">
              {user.name}
            </span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-50 focus:bg-gray-50">
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-gray-700 hover:bg-gray-50 focus:bg-gray-50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
