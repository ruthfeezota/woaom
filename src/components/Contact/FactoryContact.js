import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import Form from 'react-bootstrap/Form';

const FactoryContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const [ setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('demo')
    .add({
      name: name,
      email: email,
      company: company,
      message: message,
    })

    .then(() => {
      alert('Email has be submitted 👍')
    })
    .catch((error) => {
      alert(error.message);
    })

    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  return (
    <Form onSubmit={handleSubmit} id="demo">

    <div className="contact-page-wrapper">
      <h3 className="primary-heading">Contact Us</h3>
      <div className="contact-form-container">

        <input type="name" placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="contact-form-container">
        <input type="email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </div>

      <div className="contact-form-container">
        <input type="message" placeholder="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}  />
      </div>

      <div className="contact-form-container">
        <input type="message" placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}  />
      </div>

        <button className="third-button" type="submit">Submit</button>
      </div>
  
    </Form>
  );
};

export default FactoryContact;