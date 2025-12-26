import Image from "next/image";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import IconButton from "../icon-button";
import { GithubIcon, Link02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface ProjectItemProps {
  name: string;
  imageUrl: string;
  githubUrl: string;
  previewUrl: string;
}

export default function ProjectItem({
  name,
  imageUrl,
  githubUrl,
  previewUrl,
}: ProjectItemProps) {
  return (
    <Item variant="outline">
      <ItemHeader>
        <Image
          src={imageUrl}
          alt={name}
          width={128}
          height={128}
          className="aspect-3/2 w-full rounded-sm object-cover"
        />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
      </ItemContent>
      <ItemActions>
        <Link href={githubUrl} target="_blank">
          <IconButton icon={GithubIcon} />
        </Link>
        <Link href={previewUrl} target="_blank">
          <IconButton icon={Link02Icon} />
        </Link>
      </ItemActions>
    </Item>
  );
}
