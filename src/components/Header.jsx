// Header.tsx
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between">
      <Image src="/icon.svg" alt="logo" width={64} height={64} />
      <h1 className="text-2xl font-bold">MK Tree Felling</h1>
      {/* Add any other header content or navigation links here */}
    </header>
  );
};

export default Header;
