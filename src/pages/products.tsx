import React from 'react';

import ProductCard from '@/components/productCard';
import Layout from '@/templates/Layout';

const arrayProductos: {
  key: number;
  name: string;
  image: string;
  precio: string;
}[] = [
  {
    key: 1,
    name: 'sudadera',
    image:
      'https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/2/660x_co_ar_tr_95/22e225js033-2210_4an_6a.jpg',
    precio: '350EUR',
  },
  {
    key: 2,
    name: 'bolso bambino',
    image:
      'https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/1/660x_co_ar_tr_95/213ba007-3080_430_1.jpg',
    precio: '750EUR',
  },
  {
    key: 3,
    name: 'top cruzado',
    image:
      'https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/2/660x_co_ar_tr_95/22e211kn208-2006_430_6a.jpg',
    precio: '300EUR',
  },
  {
    key: 4,
    name: 'sudadera',
    image:
      'https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/2/660x_co_ar_tr_95/22e225js033-2210_4an_6a.jpg',
    precio: '350EUR',
  },
  {
    key: 5,
    name: 'bolso bambino',
    image:
      'https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/1/660x_co_ar_tr_95/213ba007-3080_430_1.jpg',
    precio: '750EUR',
  },
  {
    key: 6,
    name: 'top cruzado',
    image:
      'https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/2/660x_co_ar_tr_95/22e211kn208-2006_430_6a.jpg',
    precio: '300EUR',
  },
];

const products = () => {
  return (
    <Layout>
      <p>página de los productos</p>
      <div className=" grid grid-cols-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
        {arrayProductos.map((product, index) => {
          console.log(product);
          return <ProductCard key={`product-${index}`} />;
        })}
      </div>
    </Layout>
  );
};

export default products;
