import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Contact from '../components/contact-us';
import Footer from '../components/footer';

const ContactUs = () => (
  <div>
    <SEO />
    <div className='base px-3 md:px-5 lg:px-10 bg-base'>
      <Contact />
      <Footer />
      <Header />
    </div>
  </div>
);

export default ContactUs;
