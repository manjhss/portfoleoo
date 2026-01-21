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
import { ShowMoreButton } from "../show-more-button";

interface ProofListProps {
  isHomepage: boolean;
}

export function ProofList({ isHomepage }: ProofListProps) {
  const proofs = portfolioData.proofOfWorks;
  const partialProofs = proofs.slice(0, 3);

  return (
    <div className="space-y-4">
      <SectionTitle title="proof of works" />

      <ItemGroup>
        {(isHomepage ? partialProofs : proofs).map((item) => (
          <Item key={item.id} variant="muted" size="sm">
            <ItemMedia>
              <IconButton icon={GitMergeIcon} className="bg-violet-400/90" />
            </ItemMedia>
            <ItemContent>
              <Link href={item.url} className="hover:underline" target="_blank">
                <ItemTitle>
                  {item.text}{" "}
                  <IconButton
                    icon={LinkSquare02Icon}
                    variant={"link"}
                    size={"icon-sm"}
                    className="text-secondary-foreground"
                  />
                </ItemTitle>
              </Link>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>

      {isHomepage && proofs.length > 3 && (
        <ShowMoreButton redirectUrl="/proof-of-works" remainingItems={proofs.length - 3} />
      )}
    </div>
  );
}
