import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const socials = [
    {
      name: "linkedin",
      href: "https://linkedin.com/in/whogoodluck",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/whogoodluck",
      icon: Github,
    },
    {
      name: "instagram",
      href: "https://instagram.com/whogoodluck",
      icon: Instagram,
    },
    {
      name: "email",
      href: "mailto:goodluck14115@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <div className="h-screen overflow-hidden relative">
      <section className="h-full flex flex-col items-center justify-center gap-8 px-4 md:px-16">
        <div className="text-center max-w-4xl">
          <div className="text-xl text-primary font-medium mb-2">
            <span className="inline-block">Hi there 👋 I am</span>
          </div>

          <h1 className="md:text-7xl text-5xl font-extrabold mb-6">
            Sunny kumar
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-primary font-bold text-lg">{">"}</span>
            <p className="text-lg text-foreground/60 font-semibold">
              Full Stack Software Developer
            </p>
          </div>

          <p className="md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12 mx-auto">
            I am highly skilled, confident full-stack developer whose loves
            building high-quality products from the ground up.
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

          <div className="flex gap-6 justify-center">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
