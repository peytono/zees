'use client';
import { ReactElement, ReactNode } from 'react';
import { Menu, X } from 'react-feather';
import Link from 'next/link';

export default function Navigation() {
  const handleNavigation = () => {
    const navigation: HTMLElement | null = document.querySelector('.navigation');
    if (navigation)
      navigation?.style.display === 'none'
        ? (navigation.style.display = 'block')
        : (navigation.style.display = 'none');
  };

  return (
    <>
      <div className="navigation">
        <X onClick={handleNavigation} />
        <Link onClick={handleNavigation} href="/menu">Menu</Link>
        <Link onClick={handleNavigation} href="/our-pizza">Our Pizza</Link>
        <Link onClick={handleNavigation} href="/our-story">Our Story</Link>
      </div>
      <div onClick={handleNavigation}>
        <Menu size="32" />
      </div>
    </>
  );
}
