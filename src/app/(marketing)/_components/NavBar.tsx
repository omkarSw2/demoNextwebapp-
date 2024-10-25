import BrandLogo from "@/components/ui/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/90">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-lg" href="#">
          Features
        </Link>
        <Link className="text-lg" href="/#pricing">
          Pricing
        </Link>
        <Link className="text-lg" href="#">
          About
        </Link>

        <span className="text-lg">
          <SignedIn>
            <Link href={"/dashboard"}>DashBoard</Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}

export default NavBar;
