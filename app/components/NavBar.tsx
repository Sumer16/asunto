'use client'; // since we make use of the browser API by using usePathname() to get current pathname

// Not a resuable component, only being used in layout.tsx, no need to add this in separate components folder
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classnames from 'classnames'; // like cn in shadcn/ui, this package helps us to render classes based on conditions

import { IoBugSharp } from 'react-icons/io5';
import Image from 'next/image'

const NavBar = () => {
  const currentPath = usePathname(); // we use this to find the current working page we are on.

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' },
  ];
  
  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
      <Link href='/'>
        <Image src='/favicon.ico' width={30} height={30} alt='Asunto Icon' />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              'text-zinc-700': link.href === currentPath,
              'text-zinc-400': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;
