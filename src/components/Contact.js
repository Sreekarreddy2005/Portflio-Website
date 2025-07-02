import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState('');


  const SERVICE_ID = 'service_mr2oplj';
  const TEMPLATE_ID = 'template_hi39q1a'; 
  const USER_ID = 'YmwkotneSG9aUphzn';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setStatus('Please fill all fields.');
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      Sreekar: form.name,   // For {{Sreekar}} in your template
      name: form.name,      // For {{name}} in your template
      email: form.email,    // For {{email}} in your template
      phone: form.phone     // In case you add {{phone}} to your template
    }, USER_ID)
      .then(() => {
        setStatus('Thank you! Your message has been sent.');
        setForm({ name: '', email: '', phone: '' });
      })
      .catch(() => {
        setStatus('Oops! Something went wrong. Try again.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>LETS TALK</h2>
      <div className="contact-flex">
        {/* Left: Contact Form */}
        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              autoComplete="off"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              autoComplete="off"
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91-XXXXXXXXXX"
              required
              autoComplete="off"
            />

            <button type="submit">Submit</button>
            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info-box">
          <div className="contact-title">Contact Me</div>
          <p>
            <i className="fas fa-envelope"></i>
            <a href="mailto:sreekarreddyp6@gmail.com">sreekarreddyp6@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+917995292909">+91-7995292909</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
