import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio from "../../portfolio.json";

const Home = () => {
  const socials = [
    {
      name: "linkedin",
      href: portfolio.socialLinks.linkedin,
      icon: Linkedin,
    },
    {
      name: "github",
      href: portfolio.socialLinks.github,
      icon: Github,
    },
    {
      name: "instagram",
      href: portfolio.socialLinks.instagram,
      icon: Instagram,
    },
    {
      name: "email",
      href: `mailto:${portfolio.contact.email}`,
      icon: Mail,
    },
  ];

  return (
    <div className="h-screen overflow-hidden relative">
      <section className="h-full flex flex-col items-center justify-center py-12 gap-8 px-4 md:px-16">
        <div className="text-center max-w-4xl">
          <div className="text-xl text-primary font-medium mb-2">
            <span className="inline-block">{portfolio.homePage.greeting}</span>
          </div>

          <h1 className="md:text-7xl text-5xl font-extrabold mb-6">
            {portfolio.name}
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-primary font-bold text-lg">{">"}</span>
            <p className="text-lg text-foreground/60 font-semibold">
              {portfolio.tagline}
            </p>
          </div>

          <p className="md:text-lg text-sm text-foreground/60 leading-relaxed mb-8 md:mb-12 mx-auto">
            {portfolio.homePage.description}
          </p>

          <div
            className="flex gap-6 justify-center mb-8 md:mb-12"
            style={{ animationDelay: "800ms" }}
          >
            <Link
              to="/projects"
              className="px-4 cursor-pointer py-3  text-sm text-background bg-primary tracking-wide transition-all duration-300 rounded-md font-semibold hover:-translate-y-1"
            >
              Explore My Work
            </Link>
            <Link
              to="/contact"
              className="px-4 cursor-pointer py-3 border text-sm bg-muted tracking-wide transition-all duration-300  rounded-md font-semibold hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex gap-6 justify-center mb-16">
            {socials.map(({ name, icon, href }) => {
              const Icon = icon;
              return (
                <a
                  key={name}
                  href={href}
                  target={name !== "email" ? "_blank" : undefined}
                  rel={name !== "email" ? "noopener noreferrer" : undefined}
                  className="size-10 flex items-center justify-center rounded-full bg-muted text-primary/80 transition-all duration-300  hover:-translate-y-1 hover:rotate-[5deg] hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>

          <div className="md:text-lg text-sm text-start md:px-12 py-4 rounded-md">
            <p className="text-primary text-sm font-semibold mb-2">
              :: CURRENT_STATUS
            </p>
            <p className="text-foreground/60">
              {portfolio.homePage.currentStatus}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
