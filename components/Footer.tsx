import { links } from '../components/Header'

export default function PageFooter() {
  return (
    <footer className="container text-slate-400 mb-6 mt-8 sm:mt-16 text-sm flex flex-wrap justify-center items-center">
      <span>Waler Media LLC | © {new Date().getFullYear()}</span>
      <div className="w-full flex items-center justify-center space-x-3 mt-4 md:w-auto md:mt-0 md:ml-6">
        {links.external.map((link) => (
          <a
            aria-label={`${link.name} link`}
            key={link.link}
            href={link.link}
            target="_blank"
            rel="noopener"
            className="w-5 h-5 text-slate-400 transition-colors hover:text-white"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
