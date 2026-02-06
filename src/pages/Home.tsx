import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import portfolio from '../../portfolio.json'

const Home = () => {
  const socials = [
    {
      name: 'linkedin',
      href: portfolio.socialLinks.linkedin,
      icon: Linkedin,
    },
    {
      name: 'github',
      href: portfolio.socialLinks.github,
      icon: Github,
    },
    {
      name: 'instagram',
      href: portfolio.socialLinks.instagram,
      icon: Instagram,
    },
    {
      name: 'email',
      href: `mailto:${portfolio.contact.email}`,
      icon: Mail,
    },
  ]

  return (
    <div className='relative h-screen overflow-hidden'>
      <section className='flex h-full flex-col items-center justify-center gap-8 px-4 py-12 md:px-16'>
        <div className='max-w-4xl text-center'>
          <div className='text-primary mb-2 text-xl font-medium'>
            <span className='inline-block'>{portfolio.homePage.greeting}</span>
          </div>

          <h1 className='mb-6 text-5xl font-extrabold md:text-7xl'>{portfolio.name}</h1>

          <div className='mb-8 flex items-center justify-center gap-2'>
            <span className='text-primary text-lg font-bold'>{'>'}</span>
            <p className='text-foreground/60 text-lg font-semibold'>{portfolio.tagline}</p>
          </div>

          <p className='text-foreground/60 mx-auto mb-8 text-sm leading-relaxed md:mb-12 md:text-lg'>
            {portfolio.homePage.description}
          </p>

          <div
            className='mb-8 flex justify-center gap-6 md:mb-12'
            style={{ animationDelay: '800ms' }}
          >
            <Link
              to='/projects'
              className='text-background bg-primary cursor-pointer rounded-md px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1'
            >
              Explore My Work
            </Link>
            <Link
              to='/contact'
              className='bg-muted cursor-pointer rounded-md border px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1'
            >
              Get In Touch
            </Link>
          </div>

          <div className='mb-16 flex justify-center gap-6'>
            {socials.map(({ name, icon, href }) => {
              const Icon = icon
              return (
                <a
                  key={name}
                  href={href}
                  target={name !== 'email' ? '_blank' : undefined}
                  rel={name !== 'email' ? 'noopener noreferrer' : undefined}
                  className='bg-muted text-primary/80 hover:bg-primary/10 hover:text-primary flex size-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:rotate-[5deg]'
                >
                  <Icon className='size-5' />
                </a>
              )
            })}
          </div>

          <div className='rounded-md py-4 text-start text-sm md:px-12 md:text-lg'>
            <p className='text-primary mb-2 text-sm font-semibold'>:: CURRENT_STATUS</p>
            <p className='text-foreground/60'>{portfolio.homePage.currentStatus}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
