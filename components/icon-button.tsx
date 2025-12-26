import { Button } from "./ui/button";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

interface IconButtonProps {
  icon: IconSvgElement;
}

export default function IconButton({ icon }: IconButtonProps) {
  return (
    <Button variant="secondary" size={"icon"}>
      <HugeiconsIcon icon={icon} strokeWidth={2} />
    </Button>
  );
}
