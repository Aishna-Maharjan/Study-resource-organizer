import Navbar from "../component/Navbar"

function Contact() {

  return (

    <div>

      <Navbar />

      <section className="contact">

        <h1>Contact Us</h1>

        <p>
          Have suggestions or feedback?
          We'd love to hear from you.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>
  )
}

export default Contact