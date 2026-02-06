import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="h-16 md:h-20 fixed top-0 z-50 right-0 left-0 px-4 md:px-24 flex items-center md:items-end justify-end">
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          {links.map((link) => (
            <li
              key={link.name}
              className={cn("hover:text-primary", {
                "text-primary": pathname === link.href,
              })}
            >
              <Link to={link.href} className="group relative py-1 block">
                <span
                  className={cn(
                    "relative tracking-wide transition-all duration-300",
                    {
                      "text-primary": pathname === link.href,
                      "group-hover:text-primary": pathname !== link.href,
                    },
                  )}
                >
                  {link.name}
                </span>

                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    {
                      "w-1/2": pathname === link.href,
                      "w-0 group-hover:w-1/2": pathname !== link.href,
                    },
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-primary"
      >
        <Menu className="size-6" />
      </button>

      <div
        className={cn(
          "fixed top-0 z-50 right-0 w-full inset-0 bg-background/50 backdrop-blur-sm md:hidden transition-transform duration-300 ease-in-out shadow-2xl",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          },
        )}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary absolute top-5 right-4"
        >
          <X className="size-6" />
        </button>
        <div className="flex flex-col h-full justify-center">
          <nav className="">
            <ul className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <li
                  key={link.name}
                  className={cn("hover:text-primary", {
                    "text-primary": pathname === link.href,
                  })}
                >
                  <Link to={link.href} className="group relative py-1 block">
                    <span
                      className={cn(
                        "relative tracking-wide transition-all duration-300 text-foreground/80",
                        {
                          "text-primary": pathname === link.href,
                          "group-hover:text-primary": pathname !== link.href,
                        },
                      )}
                    >
                      {link.name}
                    </span>

                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                        {
                          "w-1/2": pathname === link.href,
                          "w-0 group-hover:w-1/2": pathname !== link.href,
                        },
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
