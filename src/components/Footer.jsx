import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-heading">Support</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Report Issue</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4 className="footer-heading">Legal</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <p className="footer-copyright">
                © {currentYear} Climbers. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
