import Image from "next/image";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";
import IconButton from "../icon-button";
import { GithubIcon, Link02Icon } from "@hugeicons/core-free-icons";

interface ProjectCardTwoProps {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  previewUrl: string;
}

export default function ProjectCardTwo({
  name,
  description,
  imageUrl,
  githubUrl,
  previewUrl,
}: ProjectCardTwoProps) {
  return (
    <Item variant="muted" className="border-muted-foreground/10">
      <ItemMedia>
        <Image
          src={imageUrl}
          alt={name}
          width={128}
          height={128}
          className="aspect-3/2 w-full rounded-sm object-cover"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      <ItemContent className="flex-none text-center">
        <ItemActions className="gap-1">
          <Link href={githubUrl} target="_blank">
            <IconButton icon={GithubIcon} variant={"secondary"} />
          </Link>
          <Link href={previewUrl} target="_blank">
            <IconButton icon={Link02Icon} variant={"secondary"} />
          </Link>
        </ItemActions>
      </ItemContent>
    </Item>
  );
}
