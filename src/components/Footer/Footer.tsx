import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white">
                    Company
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:text-white flex items-center space-x-2"
                  >
                    <FacebookIcon />
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white flex items-center space-x-2"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white flex items-center space-x-2"
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2023 Whatever Company. All rights reserved.
            </p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm hover:text-white">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
