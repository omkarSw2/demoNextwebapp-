import BrandLogo from "@/components/ui/BrandLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export function NavBar() {
  return (
    <header className="flex shadow py-4 bg-background">
      <nav className="flex items-center gap-10 container">
        <Link href={"/dashboard"}>
          <BrandLogo />
        </Link>
        <Link href={"/dashboard/products"}>Products</Link>
        <Link href={"/dashboard/analytics"}>Analytics</Link>
        <Link href={"/dashboard/subscription"}>Subscription</Link>
        <div className="ml-auto">
          <UserButton />
        </div>
      </nav>
    </header>
  );
}
