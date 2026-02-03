import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Auth.css'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    climbingLevel: 'Beginner'
  })
  const [errors, setErrors] = useState({})
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Simulate registration (in a real app, this would call an API)
    console.log('Registration data:', formData)
    
    alert('Registration successful! Welcome to Climbers!')
    navigate('/login')
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">⛰️</div>
            <h1>Join Climbers</h1>
            <p>Start tracking your climbing adventures today</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="climbingLevel" className="form-label">
                Climbing Level
              </label>
              <select
                id="climbingLevel"
                name="climbingLevel"
                className="form-select"
                value={formData.climbingLevel}
                onChange={handleInputChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="At least 6 characters"
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter your password"
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                  id="agreeTerms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  I agree to the{' '}
                  <Link to="/terms" className="auth-link">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="auth-link">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <div className="invalid-feedback d-block">{errors.terms}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-auth">
              Create Account
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn btn-social btn-google">
              <span className="social-icon">🔍</span>
              Sign up with Google
            </button>
            <button type="button" className="btn btn-social btn-facebook">
              <span className="social-icon">📘</span>
              Sign up with Facebook
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="auth-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
