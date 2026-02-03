import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Climbers</h1>
          <p className="hero-subtitle">
            Track your climbing routes, connect with fellow climbers, and push your limits
          </p>
          <div className="hero-buttons">
            <Link to="/routes" className="btn btn-primary btn-lg">
              Start Climbing
            </Link>
            <Link to="/community" className="btn btn-outline-light btn-lg">
              Join Community
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="container">
              <h2 className="hero-features-title">Why Choose Climbers?</h2>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="hero-feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Track Progress</h3>
                    <p>Log your climbs, track difficulty levels, and monitor your improvement over time.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="hero-feature-card">
                    <div className="feature-icon">🗺️</div>
                    <h3>Discover Routes</h3>
                    <p>Explore thousands of climbing routes shared by the community worldwide.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="hero-feature-card">
                    <div className="feature-icon">👥</div>
                    <h3>Connect</h3>
                    <p>Join a vibrant community of climbers, share experiences, and find climbing partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="mountain-illustration">
            <div className="mountain peak-1"></div>
            <div className="mountain peak-2"></div>
            <div className="mountain peak-3"></div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Climbers</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Routes Logged</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">5.0-5.15</div>
                <div className="stat-label">Difficulty Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
