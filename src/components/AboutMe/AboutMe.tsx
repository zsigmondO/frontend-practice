import { Layout } from '../Layout/Layout';
import Portfolio from './Portfolio';

function AboutMe() {
  return (
    <div>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Portfolio />
        </div>
      </Layout>
    </div>
  );
}

export default AboutMe;
