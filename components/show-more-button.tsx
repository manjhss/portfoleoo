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
    <Link href={redirectUrl} className="w-full flex justify-center">
      <Button
        variant="link"
        size={"lg"}
        className="group text-base text-muted-foreground hover:text-primary dark:hover:text-primary"
      >
        show more ({remainingItems})
      </Button>
    </Link>
  );
}
