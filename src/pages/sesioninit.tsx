import React from 'react';

import FormSesionInit from '@/components/FormSesionInit';
import Layout from '@/components/layout';

const sesioninit = () => {
  return (
    <Layout>
      <p>iniciar sesión</p>
      <FormSesionInit></FormSesionInit>
    </Layout>
  );
};

export default sesioninit;
