import BrandLogo from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/SubscriptionTiers";
import { FormatCompactNumber } from "@/lib/FormatCompctNumber";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import {
  ArrowRight,
  Check,
  CheckIcon,
  ChevronRight,
  Slack,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter m-4">
          Pricing smarter, sell bigger
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          explicabo, adipisci earum minima rem dolore delectus iusto, natus
          sequi mollitia atque maiores velit distinctio. Tempora exercitationem
          nam rem soluta ea?
        </p>
        <SignInButton>
          <Button>
            Get start for free <ArrowRight className="size-8" />
          </Button>
        </SignInButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 lg:px-16">
          <h2 className="text-3xl text-center text-balance ">
            Trusted By the top companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-16">
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link href="#">
              <Slack className="size-8" />
            </Link>
            <Link className="md:max-xl:hidden" href="#">
              <Slack className="size-8" />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-8 py-16 bg-accent/5" id="Pricing">
        <h2 className="text-4xl text-center  text-balance font-semibold mb-8">
          pricing software that gives you 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex sm:flex-row flex-col gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col  sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                {
                  label: "company Discount",
                  href: "#",
                },
                {
                  label: "about",
                  href: "#",
                },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "PPP Discounts", href: "#" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
  const MostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="text-accent mb-8 font-semibold">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100}/mo
        </CardTitle>
        <CardDescription>
          {FormatCompactNumber(maxNumberOfVisits)} Pricing page Visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInButton>
          <Button
            className="text-xl w-full rounded-lg"
            variant={MostPopular ? "accent" : "default"}>
            Get Started
          </Button>
        </SignInButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Features className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "Product" : "Products"}
        </Features>
        <Features>Company Discount</Features>
        {canAccessAnalytics && <Features>Advanced Analytics</Features>}
        {canCustomizeBanner && <Features> Banner Customization</Features>}
        {canRemoveBranding && <Features> Remove Company Branding</Features>}
      </CardFooter>
    </Card>
  );
}

function Features({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full " />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((item) => (
          <li key={item.href}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}
