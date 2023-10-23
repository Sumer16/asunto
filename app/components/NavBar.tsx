'use client'; // since we make use of the browser API by using usePathname() to get current pathname

// Not a resuable component, only being used in layout.tsx, no need to add this in separate components folder
import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import classnames from 'classnames'; // like cn in shadcn/ui, this package helps us to render classes based on conditions

import { Skeleton } from '@/app/components';

import { 
  Avatar,
  Box, 
  Container, 
  Flex,
  DropdownMenu,
  Text,
} from '@radix-ui/themes';

const NavBar = () => {
  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='3'>
            <Link href='/'>
              <Image src='/favicon.ico' width={30} height={30} alt='Asunto Icon' />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  )
}

const NavLinks = () => {
  const currentPath = usePathname(); // we use this to find the current working page we are on.
  
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues/list' },
  ];

  return (
    <ul className='flex space-x-6'>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              '!text-zinc-700': link.href === currentPath,
              'nav-link': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return <Skeleton width='3rem' />;

  if (status === 'unauthenticated'){
    return (
      <Link className='nav-link' href='/api/auth/signin'>
        Login
      </Link>
    );
  }

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback='?'
            size='2'
            radius='full'
            className='cursor-pointer'
            referrerPolicy='no-referrer'
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size='2'>{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href='/api/auth/signout'>Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  )
}

export default NavBar;
