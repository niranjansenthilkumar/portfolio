import { useTheme } from "next-themes";
import { useMounted } from "nextra/hooks";
import { MoonIcon, SunIcon } from "nextra/icons";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  // @TODO: system theme
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <span
      role="button"
      aria-label="Toggle Dark Mode"
      className="cursor-pointer p-2 text-transparent"
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter") toggleTheme();
      }}
    >
      {mounted && isDark ? (
        <MoonIcon className="w-4 h-4 stroke-gray-200" />
      ) : (
        <SunIcon className="w-4 h-4 stroke-gray-700" />
      )}
    </span>
  );
}
