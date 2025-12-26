import { portfolioData } from "@/data/portfolio";
import IconButton from "../icon-button";
import { Mail01Icon } from "@hugeicons/core-free-icons";

export function ContactSection() {
  const { email } = portfolioData.profile;

  return (
    <div>
      <p className="text-sm text-orange-500 my-4">
        need a committed developer to build your product,
        <br />
        feel free to connect -
      </p>
      <div className="flex items-center gap-2 mb-8">
        <IconButton icon={Mail01Icon} />
        <a href={`mailto:${email}`} className="text-sm hover:underline">
          {email}
        </a>
      </div>
    </div>
  );
}
