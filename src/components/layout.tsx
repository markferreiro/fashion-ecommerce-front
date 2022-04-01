import { ReactNode } from 'react'; // es el tipo predeterminado para el atributo de children

import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

type ILayoutProps = {
  // meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: ILayoutProps) => {
  return (
    <>
      {/*  {props.meta} */}
      <Header></Header>

      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
