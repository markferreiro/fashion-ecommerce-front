import React from 'react';

import Layout from '@/components/layout';
import ProductCard from '@/components/productCard';

const products = () => {
  return (
    <Layout>
      <p>página de los productos</p>
      <div className=" grid grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Layout>
  );
};

export default products;
