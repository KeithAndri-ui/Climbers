import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Auth.css'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    // Simulate login (in a real app, this would call an API)
    console.log('Login attempt:', formData)
    
    // For demo purposes, accept any email/password
    // In production, this would validate against a backend
    alert('Login successful! Redirecting...')
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">⛰️</div>
            <h1>Welcome Back</h1>
            <p>Sign in to continue your climbing journey</p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary btn-auth">
              Sign In
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn btn-social btn-google">
              <span className="social-icon">🔍</span>
              Continue with Google
            </button>
            <button type="button" className="btn btn-social btn-facebook">
              <span className="social-icon">📘</span>
              Continue with Facebook
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
