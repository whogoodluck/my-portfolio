import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header() {
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

  const { pathname } = useLocation();

  return (
    <header className="h-20 fixed top-0 right-0 left-0 px-4 md:px-24 flex items-center md:items-end justify-end">
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

      <button className="md:hidden text-primary">
        <Menu className="size-6" />
      </button>
    </header>
  );
}

export default Header;
