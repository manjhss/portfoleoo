import { portfolioData } from "@/data/portfolio";
import IconButton from "../icon-button";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export function ContactSection() {
  const { email } = portfolioData.profile;

  return (
    <div>
      <p className="text-sm text-primary mb-6 font-medium">
        Need a committed developer to build or improve your
        product, <br className="hidden sm:block" />
        feel free to connect -
      </p>
      <div className="flex items-center gap-2 font-medium">
        <IconButton icon={Mail01Icon} variant={"secondary"} className="cursor-auto" />
        <Link href={`mailto:${email}`} className="text-sm hover:underline">
          {email}
        </Link>
      </div>
    </div>
  );
}
