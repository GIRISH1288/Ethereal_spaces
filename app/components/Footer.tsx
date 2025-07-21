import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-neutral-200 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-accent transition">
          <FaInstagram size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-accent transition">
          <FaFacebook size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-accent transition">
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="text-neutral-500 text-sm mb-2">
        123 Luxury Ave, New York, NY &middot; (555) 123-4567 &middot; info@etherialspaces.com
      </div>
      <div className="text-neutral-400 text-xs">
        &copy; {new Date().getFullYear()} Ethereal Spaces. All rights reserved.
      </div>
    </footer>
  )
} 