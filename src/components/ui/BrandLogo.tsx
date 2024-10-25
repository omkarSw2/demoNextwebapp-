import { Globe } from "lucide-react";
import React from "react";

function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <Globe className="size-8" />
      <span>Name</span>
    </span>
  );
}

export default BrandLogo;
