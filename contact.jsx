import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Contact() {
  document.title = "Contact Us | Property CRM";

  return (
    <>
      <Navbar />
      <PageHero
  title="Contact Us"
  image="/images/hero_bg_3.jpg"
/>


      <div className="container mt-5 mb-5">
        <h2 className="mb-4">Contact Us</h2>

        <div className="row">
          {/* LEFT: CONTACT INFO */}
          <div className="col-md-5 mb-4">
            <h5>Our Office</h5>
            <p>
              43 Raymouth Rd,<br />
              Baltemoer, London 3910
            </p>

            <h5>Open Hours</h5>
            <p>
              Monday – Friday: 9:00 AM – 6:00 PM <br />
              Saturday: 10:00 AM – 4:00 PM <br />
              Sunday: Closed
            </p>

            <h5>Email</h5>
            <p>info@propertycrm.com</p>

            <h5>Phone</h5>
            <p>
              +1 (123) 456-7890 <br />
              +1 (987) 654-3210
            </p>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="col-md-7">
            <h5>Send us a message</h5>

            <form>
              <input
                className="form-control mb-3"
                placeholder="Your Name"
              />

              <input
                className="form-control mb-3"
                placeholder="Your Email"
                type="email"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* REPEATED CONTACT SECTION */}
        <hr className="my-5" />

        <h3>Contact</h3>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890, +1 (987) 654-3210
        </p>
        <p>
          <strong>Email:</strong> info@propertycrm.com
        </p>
        <p>
          <strong>Address:</strong> 43 Raymouth Rd, Baltemoer, London 3910
        </p>
      </div>

      <Footer />
    </>
  );
}
