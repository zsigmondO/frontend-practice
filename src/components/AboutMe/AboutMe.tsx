import { Link } from 'react-router-dom';

import { Layout } from '../Layout/Layout';

function AboutMe() {
  return (
    <div>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p>
            I'm planning to write a short description here with an image after I
            complete the Login and the Backend for the app.
          </p>
          <p>
            As for now please take a look at my{' '}
            <Link
              to="https://www.linkedin.com/in/zsigmond-gy%C3%B6ny%C3%B6r%C5%B1/"
              className="text-app-primary-color-tailwind hover:underline"
              target="_blank"
            >
              Linkedin
            </Link>{' '}
            if I haven't sent you my CV.
          </p>
          <br />
          <Link
            to="/pagination/rick-and-morty?page=1"
            className="text-app-primary-color-tailwind hover:underline"
          >
            You can take a look at my responsive Pagination exercise.
          </Link>
        </div>
      </Layout>
    </div>
  );
}

export default AboutMe;
