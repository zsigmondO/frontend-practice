import { Link } from 'react-router-dom';

import { Layout } from '../Layout/Layout';

function ThisApp() {
  return (
    <div>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p>
            I will also implement a <b>login page</b>, and some kind of{' '}
            <b>authorization</b> with a separate <b>backend</b>.
          </p>
          <Link
            to="/pagination/rick-and-morty?page=1"
            className="text-app-primary-color-tailwind hover:underline"
          >
            As for now please take a look at my Pagination exercise.
          </Link>
        </div>
      </Layout>
    </div>
  );
}

export default ThisApp;
