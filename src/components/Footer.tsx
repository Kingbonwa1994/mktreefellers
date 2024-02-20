import { FaWhatsapp, FaTelegram, FaPhone, FaEnvelope } from 'react-icons/fa';

async function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 w-full bg-blue-950 text-white p-4 flex justify-between">
        <a className="text-blue-500 mx-2" href="https://wa.me/0664108764">
          <FaWhatsapp size={24} />
        </a>
        <a className="text-green-500 mx-2" href="https://t.me/mktreefellers">
          <FaTelegram size={24} />
        </a>
        <a className="text-blue-600 mx-2" href="tel:0664108764">
          <FaPhone size={24} />
        </a>
        <a className="text-red-100 mx-2" href="mailto:info@mktreefellers.com">
          <FaEnvelope size={24} />
        </a>

        <p className="text-sm hidden md:block">
          &copy; {new Date().getFullYear()} MK TreeFellers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
