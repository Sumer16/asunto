// Not a resuable component, only being used in layout.tsx. No need to add this in separate components folder
import Link from 'next/link';

import { IoBugSharp } from 'react-icons/io5';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  
  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
      <Link href="/"><IoBugSharp /></Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link 
            key={link.href} 
            className="text-zinc-500 hover:text-zinc-800 transition-colors" 
            href="/"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;
