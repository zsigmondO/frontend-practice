import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { Tooltip } from '@mui/material';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#F54866',
  '&:hover': {
    backgroundColor: grey[900],
  },
}));

function Header() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="text-app-primary-color-tailwind hover:text-gray-900"
              >
                <HomeIcon className="h-6 w-6" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/pagination/rick-and-morty?page=1"
                className="text-gray-500 hover:text-gray-900"
              >
                Pagination
              </Link>
              <Link
                to="/this-app"
                className="text-gray-500 hover:text-gray-900"
              >
                About this app
              </Link>
              <Link to="/zsiga" className="text-gray-500 hover:text-gray-900">
                About me Zsiga
              </Link>
            </nav>
            <div className="flex items-center">
              <Tooltip title="Coming soon!">
                <ColorButton
                  variant="contained"
                  className="text-gray-500 hover:bg-gray-900"
                >
                  Login
                </ColorButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
