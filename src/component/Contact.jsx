import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  }

  return (
    <div>
      <Navbar />

      <section className="contact">
        <div className="contact-hero">
          <h1>Get in touch</h1>
          <p>Have feedback, a suggestion, or just want to say hi?</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>We'd love to hear from you</h2>
            <p>
              Study Organizer is always improving. If something isn't
              working the way you'd expect, or you have an idea that
              would make studying easier — tell us about it.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon">💬</div>
              <div>
                <h4>Feedback & suggestions</h4>
                <p>Share ideas on features you'd like to see</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">🐛</div>
              <div>
                <h4>Bug reports</h4>
                <p>Let us know if something's broken or behaving oddly</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">📬</div>
              <div>
                <h4>Email us directly</h4>
                <p>support@studyorganizer.com</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="contact-success">
                <h3>Message sent!</h3>
                <p>
                  Thanks {name.split(" ")[0]}, we got your message and
                  will get back to you at {email} soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your message..."
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button type="submit">Send message →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
