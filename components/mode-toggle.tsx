"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DarkModeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <HugeiconsIcon icon={DarkModeIcon} strokeWidth={2} />
    </Button>
  );
}
