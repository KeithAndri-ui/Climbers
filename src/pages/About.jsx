import { Link } from 'react-router-dom'
import '../styles/About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">About Climbers</h1>
            <p className="about-subtitle">
              Empowering climbers worldwide to track their progress, discover new routes, and connect with a vibrant community
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                At Climbers, we believe that every climb tells a story. Our mission is to provide climbers of all levels with the tools they need to document their journey, celebrate their achievements, and inspire others to reach new heights.
              </p>
              <p className="section-text">
                Whether you're scaling your first indoor wall or conquering challenging outdoor routes, Climbers is here to support your passion and help you grow as a climber.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="mission-image">
                <div className="climbing-icon-large">⛰️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container">
          <h2 className="section-title text-center">What We Offer</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <div className="feature-icon">📊</div>
                <h3>Track Your Progress</h3>
                <p>
                  Log every climb, monitor your improvement, and set personal goals. Our comprehensive tracking system helps you see how far you've come.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Discover Routes</h3>
                <p>
                  Explore thousands of climbing routes shared by our community. Find new challenges and plan your next adventure.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <div className="feature-icon">👥</div>
                <h3>Connect & Share</h3>
                <p>
                  Join a global community of climbers. Share experiences, get advice, and find climbing partners in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title text-center">Our Story</h2>
            <div className="story-text">
              <p>
                Climbers was born from a simple idea: climbing is more than just a sport—it's a journey of personal growth, adventure, and community. Founded by passionate climbers who wanted to create a platform that celebrates this incredible activity, we've grown into a thriving community of thousands of climbers worldwide.
              </p>
              <p>
                What started as a way to track personal climbing achievements has evolved into a comprehensive platform where climbers can document their routes, share their experiences, and inspire others. We're constantly working to improve and add new features based on feedback from our amazing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h4>Growth</h4>
                <p>We believe in continuous improvement, both personally and as a platform.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Community</h4>
                <p>Climbing is better together. We foster connections and support among climbers.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h4>Passion</h4>
                <p>We're driven by our love for climbing and helping others discover this amazing sport.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h4>Innovation</h4>
                <p>We're always looking for new ways to enhance your climbing experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-box">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Climbers</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-box">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Routes Logged</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-box">
                <div className="stat-number">200+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-box">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Climbing Journey?</h2>
            <p className="cta-text">
              Join thousands of climbers who are already tracking their progress and connecting with the community
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link to="/routes" className="btn btn-outline-light btn-lg">
                Explore Routes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="container">
          <h2 className="section-title text-center">Get in Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h4>Email</h4>
              <p>hello@climbers.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <h4>Support</h4>
              <p>support@climbers.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <h4>Social Media</h4>
              <p>@climbersapp</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
