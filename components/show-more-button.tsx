import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ShowMoreButtonProps {
  redirectUrl: string;
  remainingItems: number;
}

export function ShowMoreButton({
  redirectUrl,
  remainingItems,
}: ShowMoreButtonProps) {
  return (
    <Link href={redirectUrl}>
      <Button
        variant="ghost"
        size={"lg"}
        className="w-full text-base text-muted-foreground"
      >
        show more ({remainingItems})
      </Button>
    </Link>
  );
}
