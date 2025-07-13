"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HomeView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.svg"
              alt="Talkist Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Welcome to Talkist
          </CardTitle>
          <CardDescription className="text-gray-600">
            Please sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/sign-in" className="w-full">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up" className="w-full">
            <Button variant="outline" className="w-full">
              Create Account
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
