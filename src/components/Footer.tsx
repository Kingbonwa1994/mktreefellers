// StickyFooter.tsx
import React from 'react';
import { FaWhatsapp, FaPhone, FaTelegram, FaEnvelope } from 'react-icons/fa';

const StickyFooter: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-900 shadow-lg text-white p-4 flex justify-between items-center">
      <div>
        <button className="text-blue-400 mx-2">
          <FaWhatsapp size={24} />
        </button>
        <button className="text-green-400 mx-2">
          <FaPhone size={24} />
        </button>
        <button className="text-blue-500 mx-2">
          <FaTelegram size={24} />
        </button>
        <button className="text-red-500 mx-2">
          <FaEnvelope size={24} />
        </button>
      </div>
      <div>
        <p className="text-sm">&copy; {new Date().getFullYear()} MK TreeFellers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default StickyFooter;
