export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h3>Contact</h3>
            <address>
              43 Raymouth Rd. Baltemoer, London 3910
            </address>
            <ul className="list-unstyled">
              <li>+1 (123) 456-7890</li>
              <li>info@propertycrm.com</li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h3>Property CRM</h3>
            <p>
              A modern CRM solution to manage clients, brokers,
              and properties efficiently.
            </p>
          </div>
        </div>

        <div className="text-center mt-4 text-black-50">
          © {new Date().getFullYear()} Property CRM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
