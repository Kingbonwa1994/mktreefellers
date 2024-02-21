// Header.tsx
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between">
      <Image className='w-40 h-24 text-white' src="/icon.svg" alt="logo" width={6} height={6} />
      <h1 className="text-3xl font-bold m-auto">MK Tree Fellers</h1>
      {/* Add any other header content or navigation links here */}
    </header>
  );
};

export default Header;
