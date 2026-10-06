import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark((value) => !value)}
      className="rounded-xl border border-gray-200 p-2.5 transition hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label="Toggle dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}