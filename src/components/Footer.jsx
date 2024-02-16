
import { FaWhatsapp, FaPhone, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'next/link';
export default function Footer() {
  return (
    <div>
        <footer className="fixed bottom-0 left-0 w-full bg-blue-900 shadow-slate-900 text-white p-4 flex justify-between items-center">
    
            <Link className="text-blue-400 mx-2">
              <FaWhatsapp size={24} />
            </Link>
            <Link className="text-green-400 mx-2">
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            </Link>
            <Link className="text-blue-500 mx-2">
              <FaTelegram size={24} />
            </Link>
            <Link className="text-red-500 mx-2">
              <FaEnvelope size={24} />
            </Link>
          
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} MK TreeFellers. All rights reserved.</p>
          </div>
        </footer>
      );
    </div>
  )
}
