import './Home.scss';
import { Layout } from '../Layout/Layout';

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Layout>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="app">
              <h1>Welcome to my React App</h1>
            </div>
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg">This is a sample text.</p>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Home;
