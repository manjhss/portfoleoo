import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import IconButton from "../icon-button";
import { GitMergeIcon } from "@hugeicons/core-free-icons";
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
    <div className="space-y-2 mb-6">
      <SectionTitle title="proof of works" />

      <ItemGroup>
        {proofs.map((item) => (
          <Item key={item.id} variant="outline" size="sm">
            <ItemMedia>
              <IconButton icon={GitMergeIcon} />
            </ItemMedia>
            <ItemContent>
              <Link href={item.url} className="hover:underline" target="_blank">
                <ItemTitle>{item.text}</ItemTitle>
              </Link>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
