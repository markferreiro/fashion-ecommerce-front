import React from 'react';

import Image from 'next/image';

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

const productCard = () => {
  return (
    <>
      <a href="">
        <div className="bg-gray-200">
          {arrayProductos.map((product: any) => (
            <Image
              key={product.key}
              alt=""
              src={product.image}
              layout="responsive"
              width="500"
              height="500"
              className="group-hover:opacity-75"
            />
          ))}
          <div className="flex items-center justify-between p-0 uppercase">
            <h3 className="text-sm font-medium text-gray-900">Lee Robinson</h3>
            <p className="text-sm font-medium text-gray-900">45,50EUR</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default productCard;
