import { Button, buttonVariants } from "./ui/button";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { type VariantProps } from "class-variance-authority";

interface IconButtonProps {
  icon: IconSvgElement;
}

export default function IconButton({
  icon,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  IconButtonProps) {
  return (
    <Button variant="default" size={"icon"} className="cursor-pointer" {...props}>
      <HugeiconsIcon icon={icon} strokeWidth={2} />
    </Button>
  );
}
