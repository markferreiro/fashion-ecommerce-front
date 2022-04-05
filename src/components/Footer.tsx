import React from 'react';

import { FooterSection } from './FooterSection';

export const Footer = () => {
  return (
    <footer className="bg-orange-100 px-3 uppercase">
      <div className="container m-auto max-w-6xl">
        <div className="flex flex-wrap">
          <FooterSection
            title="company"
            items={[
              {
                name: 'about us',
                url: '#',
              },
              {
                name: 'our services',
                url: '#',
              },
              {
                name: 'privacy policy',
                url: '#',
              },
              {
                name: 'affiliate program',
                url: '#',
              },
            ]}
          />
          <FooterSection
            title="get help"
            items={[
              {
                name: 'FAQ',
                url: '#',
              },
              {
                name: 'shipping',
                url: '#',
              },
              {
                name: 'returns',
                url: '#',
              },
              {
                name: 'order status',
                url: '#',
              },
              {
                name: 'payment options',
                url: '#',
              },
            ]}
          />
          <div className="mb-7 w-1/4 py-4 md:w-1/2 sm:w-full">
            <h4 className="relative mb-3 border-0">online shop</h4>
            <ul>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div className="mb-7 w-1/4 py-4 md:w-1/2 sm:w-full">
            <h4 className="relative mb-3 border-0">follow us</h4>
            <ul>
              <li>
                <a href="#">instagram</a>
              </li>
              <li>
                <a href="#">twitter</a>
              </li>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
