import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "首頁" },
  { to: "/portfolio", label: "作品集" },
  { to: "/contact", label: "聯絡我們" },
];

function getNavClassName({ isActive }) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
    isActive
      ? "bg-brand-cocoa text-white"
      : "text-brand-cocoa hover:bg-white/80",
  ].join(" ");
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-brand-peach/40 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-brand-cocoa"
          onClick={closeMenu}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-rose text-lg font-bold text-white shadow-soft">
            CB
          </div>
          <div>
            <p className="text-lg font-semibold">蛋糕芭比</p>
            <p className="text-xs text-brand-cocoa/70">Cake Barbie Studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={getNavClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-peach/60 text-brand-cocoa md:hidden"
          aria-label="切換選單"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="text-xl">{isMenuOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-brand-peach/40 bg-white/90 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={getNavClassName}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
