import React from 'react';
import ContactForm from '../../components/contactForm/contactForm';
import ContactInfo from '../../components/contactInfo/contactInfo';

const Contacts = () => {
  return (
    <div className="grid md:grid-cols-2 max-[768px]:my-12">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contacts;
