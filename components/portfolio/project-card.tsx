import Image from "next/image";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import IconButton from "../icon-button";
import { GithubIcon, Link02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  previewUrl,
}: ProjectCardProps) {
  return (
    <Item variant="muted">
      <ItemHeader>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={128}
          height={128}
          className="aspect-3/2 w-full rounded-sm object-cover"
        />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription className="leading-5">{description}</ItemDescription>
      </ItemContent>
      <ItemActions className="gap-1">
        <Link href={githubUrl} target="_blank">
          <IconButton icon={GithubIcon} variant={"secondary"} />
        </Link>
        <Link href={previewUrl} target="_blank">
          <IconButton icon={Link02Icon} variant={"secondary"} />
        </Link>
      </ItemActions>
    </Item>
  );
}
