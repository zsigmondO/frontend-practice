import './Home.scss';
import { Link } from 'react-router-dom';

import { Layout } from '../Layout/Layout';

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Layout>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-4">Hi I'm Zsiga</h1>
            <p className="text-lg">
              I use this SPA as my portfolio and as a frontend sandbox for
              practicing and trying out stuff!
            </p>
            <p className="text-lg">
              Please don't judge this app, I try to develop and fix things
              everyday.
            </p>
            <p>
              As for now you could take look at my Linkedin if I didn't send you
              my CV. But soon I will animate this Home Page with scrolling
              animations and I will do a nice design!
            </p>
            <br />
            <Link
              to="https://www.linkedin.com/in/zsigmond-gy%C3%B6ny%C3%B6r%C5%B1/"
              className="text-app-primary-color-tailwind hover:underline"
              target="_blank"
            >
              My Linkedin
            </Link>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Home;
