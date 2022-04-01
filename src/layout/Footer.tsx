import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-100 px-3 uppercase">
      <div className="container m-auto max-w-6xl">
        <div className="flex flex-wrap">
          <div className="mb-7 w-1/4 py-4 sm:w-full md:w-1/2">
            <h4 className="relative mb-3 border-0">company</h4>
            <ul>
              <li>
                <a className="hover:pl-2" href="#">
                  about us
                </a>
              </li>
              <li>
                <a className="hover:pl-2" href="#">
                  our services
                </a>
              </li>
              <li>
                <a className="hover:pl-2" href="#">
                  privacy policy
                </a>
              </li>
              <li>
                <a className="hover:pl-2" href="#">
                  affiliate program
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-7 w-1/4 py-4 sm:w-full md:w-1/2">
            <h4 className="relative mb-3 border-0">get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="mb-7 w-1/4 py-4 sm:w-full md:w-1/2">
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
          <div className="mb-7 w-1/4 py-4 sm:w-full md:w-1/2">
            <h4 className="relative mb-3 border-0">follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f inline-block h-10 w-10 rounded-full bg-slate-300 text-center leading-10">
                  face
                </i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>twi
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>ins
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>lin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
