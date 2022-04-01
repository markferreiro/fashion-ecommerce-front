// import { useRouter } from 'next/router';

// import { Meta } from '@/layout/Meta';
import Layout from '@/components/layout';

const Index = () => {
  // const router = useRouter();

  return (
    /* <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>main</h1>
    </Main> */
    <>
      <Layout>
        <p>index</p>
      </Layout>
    </>
  );
};

export default Index;
