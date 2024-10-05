'use client';
import { useState } from 'react';
import { Menu, X } from 'react-feather';
import Link from 'next/link';

export default function Navigation() {
  const [display, setDisplay] = useState('hidden');

  const handleModalDisplay = () => {
    setDisplay((prev) => (prev === 'hidden') ? 'block' : 'hidden');
  };

  return (
    <>
      <div className={`navigation overflow-y-hidden ${display}` }>
        <X onClick={handleModalDisplay} />
        <div className='my-4 flex flex-col items-center space-y-3'>
          <Link onClick={handleModalDisplay} href="/menu">
            Menu
          </Link>
          <Link onClick={handleModalDisplay} href="/our-pizza">
            Our Pizza
          </Link>
          <Link onClick={handleModalDisplay} href="/our-story">
            Our Story
          </Link>
        </div>
      </div>
      <div onClick={handleModalDisplay}>
        <Menu size="32" />
      </div>
    </>
  );
}
