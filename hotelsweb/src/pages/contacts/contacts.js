import React from 'react';
import ContactForm from '../../components/contactForm/contactForm';
import ContactInfo from '../../components/contactInfo/contactInfo';

const Contacts = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:my-12">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contacts;
