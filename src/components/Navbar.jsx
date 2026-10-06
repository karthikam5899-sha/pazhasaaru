import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Home", "home"],
  ["Menu", "menu"],
  ["About", "about"],
  ["Offers", "offers"],
  ["Contact", "contact"],
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-custom pt-4">
        <nav className="glass rounded-2xl px-5 py-3 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src="/images/Pazha-Saaru.png" alt="Pazha Saaru logo" className="h-10 w-10 rounded-full object-contain shadow-lg shadow-green-900/10" />
              <div>
                <h1 className="whitespace-nowrap text-[15px] font-black sm:text-lg">
                  Pazha<span className="text-green-600"> Saaru</span>
                </h1>
                <p className="hidden text-[10px] font-medium text-gray-500 sm:block">
                  Fresh juice. Natural taste.
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {links.map(([label, href]) => (
                <a key={href} href={`#${href}`} className="text-sm font-semibold transition hover:text-green-600">
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle dark={dark} setDark={setDark} />
              <button
                type="button"
                className="hidden rounded-xl bg-green-600 p-2.5 text-white transition hover:-translate-y-0.5 hover:bg-green-700 sm:block"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={19} />
              </button>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="rounded-xl p-2 transition hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
                aria-label="Toggle navigation"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700 md:hidden">
              <div className="flex flex-col gap-2">
                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={`#${href}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 font-semibold transition hover:bg-green-50 hover:text-green-700 dark:hover:bg-green-950"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}