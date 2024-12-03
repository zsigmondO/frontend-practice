import { Rating } from '@mui/material';

import { Layout } from '../Layout/Layout';

function Rate() {
  return (
    <div>
      <Layout>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Layout>
    </div>
  );
}

export default Rate;
