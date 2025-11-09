import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Innovatech
        </Link>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;