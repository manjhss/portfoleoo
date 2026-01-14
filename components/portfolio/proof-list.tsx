import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import IconButton from "../icon-button";
import { GitMergeIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import SectionTitle from "../section-title";

export function ProofList() {
  const proofs = portfolioData.proofOfWorks;

  return (
    <div>
      <SectionTitle title="proof of works" />

      <ItemGroup>
        {proofs.map((item) => (
          <Item key={item.id} variant="muted" size="sm">
            <ItemMedia>
              <IconButton icon={GitMergeIcon} className="bg-violet-400/90" />
            </ItemMedia>
            <ItemContent>
              <Link href={item.url} className="hover:underline" target="_blank">
                <ItemTitle>
                  {item.text} <IconButton icon={LinkSquare02Icon} variant={"link"} size={"icon-sm"} className="text-secondary-foreground" />
                </ItemTitle>
              </Link>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
