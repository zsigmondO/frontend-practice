import './NotFound.scss';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import { Layout } from '../Layout/Layout';

function NotFound() {
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 py-12">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
              <h2 className="text-4xl font-bold text-gray-700">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600">
                Oops! The page you're looking for doesn't exist.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-app-primary-color-tailwind hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                <HomeIcon className="mr-2 h-5 w-5" />
                Back to Homepage
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-gray-500">
                If you believe this is a mistake, please{' '}
                <Link
                  to="#"
                  className="text-app-primary-color-tailwind hover:underline"
                >
                  contact our support team
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default NotFound;
