import React, { useState } from 'react';
import { personalInfo } from '../data/config';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xrbagaja', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-canva" id="contact">
      <div className="contact-canva-container">
        <h2 className="contact-canva-title" data-aos="fade-up">Contact Info</h2>
        <p className="contact-canva-subtitle" data-aos="fade-up" data-aos-delay="100">Let's connect and work together!</p>

        <div className="contact-canva-main">
          {/* Contact Info */}
          <div className="contact-canva-info" data-aos="fade-right" data-aos-delay="150">
            <div className="contact-canva-item">
              <div className="contact-canva-icon">
                <i className="bx bxl-linkedin"></i>
              </div>
              <div className="contact-canva-details">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/bhart-chauhan-8a65bb277/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/bhart-chauhan
                </a>
              </div>
            </div>

            <div className="contact-canva-item">
              <div className="contact-canva-icon">
                <i className="bx bxl-whatsapp"></i>
              </div>
              <div className="contact-canva-details">
                <h4>Phone (WhatsApp)</h4>
                <a href={`https://wa.me/${personalInfo.whatsapp}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="contact-canva-item">
              <div className="contact-canva-icon">
                <i className="bx bx-envelope"></i>
              </div>
              <div className="contact-canva-details">
                <h4>E-mail</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-canva-form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="150">
            <div className="form-group-canva">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                className={errors.name ? 'error' : ''} 
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group-canva">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                className={errors.email ? 'error' : ''} 
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group-canva">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            {submitStatus === 'success' && <div className="success-msg">✅ Message sent successfully!</div>}
            {submitStatus === 'error' && <div className="error-msg">❌ Failed to send. Try again.</div>}

            <button type="submit" className="contact-canva-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
