// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <Image src="/logo.svg"/ alt="logo" width={36} height={36}>
      <h1 className="text-2xl font-bold">MK Tree Felling</h1>
      {/* Add any other header content or navigation links here */}
    </header>
  );
};

export default Header;
