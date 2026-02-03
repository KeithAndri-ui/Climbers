import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

          <div className="row align-items-center">
            <div className="col-12 text-center">
              <p className="footer-copyright">
                © {currentYear} Climbers. All rights reserved.
              </p>
            </div>
        </div> 
    </footer>
  )
}

export default Footer
