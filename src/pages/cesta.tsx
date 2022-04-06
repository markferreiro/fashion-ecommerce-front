import React from 'react';

import Layout from '@/components/layout';

const cesta = () => {
  return (
    <Layout>
      <div className="flex w-2/5 flex-col justify-center">
        <div className="flex ">
          <div className="relative max-h-40 justify-start bg-slate-500">
            <img
              className="max-h-40 object-contain"
              src="https://mcprod.jacquemus.com/media/staempfli_imageresizer/cache/catalog/product/2/1/660x_co_ar_tr_95/213ba007-3080_430_1.jpg"
              alt=""
            />
          </div>
          <div className="relative flex w-60 flex-col justify-between pl-5 pt-6">
            <div>
              <h3>nombre prenda</h3>
              <h5>color prenda</h5>
            </div>

            <div className="mt-3 flex  justify-between">
              <div className="flex flex-wrap ">
                <p className="pr-4">talla</p>
                <p>cantidad</p>
              </div>
              <div>precio</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default cesta;
