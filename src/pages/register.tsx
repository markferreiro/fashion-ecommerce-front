import React from 'react';

import RegistrationForm from '@/components/RegistrationForm';
import Layout from '@/templates/Layout';

const register = () => {
  return (
    <Layout>
      <p>Registro</p>
      <RegistrationForm></RegistrationForm>
    </Layout>
  );
};

export default register;
