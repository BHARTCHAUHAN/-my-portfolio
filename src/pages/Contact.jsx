import React, { useState } from 'react';

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
    <section className="contact-n8n" id="contact">
      <div className="contact-n8n-content">
        <h2 className="contact-n8n-title gradient-text">Get in Touch</h2>
        <div className="contact-n8n-main">
          <div className="contact-n8n-info">
            <h3 className="contact-n8n-subtitle">Connect with Me</h3>
            <p className="contact-n8n-desc">I enjoy data-driven problems. Discuss projects or exchange ideas.</p>
            <div className="contact-n8n-details">
              <div className="detail-item">
                <i className="bx bx-envelope"></i>
                <a href="mailto:chauhanbhart2792@gmail.com">chauhanbhart2792@gmail.com</a>
              </div>
              <div className="detail-item">
                <i className="bx bx-phone"></i>
                <a href="tel:+918189091763">+91 81890 91763</a>
              </div>
              <div className="detail-item">
                <i className="bx bx-map"></i>
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
          <form className="contact-n8n-form" onSubmit={handleSubmit}>
            <div className="form-group-n8n">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="form-group-n8n">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="form-group-n8n">
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} className={errors.message ? 'error' : ''}></textarea>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>
            {submitStatus === 'success' && <div className="success-msg">Message sent successfully!</div>}
            {submitStatus === 'error' && <div className="error-msg">Failed to send. Try again.</div>}
            <button type="submit" className="n8n-btn n8n-btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
