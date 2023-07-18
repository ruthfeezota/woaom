import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import Form from 'react-bootstrap/Form';


const Contact = () => {
  const [email, setEmail] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('email')
    .add({
      email: email,
    })

    .then(() => {
      alert('Email has be submitted 👍')
    })
    .catch((error) => {
      alert(error.message);
    });

    setEmail("");
  };
  return (
    <Form onSubmit={handleSubmit } id="contact" >
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Join Our Email List</h1>
      <p className="primary-text">Be the first to know when we launch</p>
      <div className="contact-form-container">
        <input type="email" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}  />
        <button className="secondary-button" type="submit">Submit</button>
      </div>
    </div>
    </Form>
  );
};

export default Contact;
