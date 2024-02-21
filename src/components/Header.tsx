// Header.tsx
import React from 'react';
import Image from 'next/image';

const Header = () => {
  const toggleModal = () => {
    setShowModal(!showModal); // Invert the current state
  };
  return (
    <header className=" bg-teal-900 text-white p-4 flex justify-center">
    <div>
      <Image className='w-40 h-16 ' src="/icon.svg" alt="logo" width={6} height={6} />
    </div>
    <div>
      <h1 className="text-2xl font-bold my-4 hidden">MK Tree Fellers</h1>
    </div>
    <button className='text-2xl bg-teal-800 rounded-xl hover:bg-teal-700' onClick={toggleModal}>Quote</button>
      {/* Add any other header content or navigation links here */}
    </header>
  );
};

export default Header;
