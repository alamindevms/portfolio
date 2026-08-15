import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
    >
      {mounted ? (
        theme === "dark" ? (
          <SunIcon className="size-[18px]" />
        ) : (
          <MoonIcon className="size-[18px]" />
        )
      ) : (
        <span className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
