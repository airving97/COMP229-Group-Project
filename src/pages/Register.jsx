
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setMessage('Registration is ready for backend integration.')
  }

  return (
    <>
      <header>
        <div className="logo">
          Career<span>Connect</span>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Create Your Account</h1>
          <p>Join CareerConnect and organize your job search in one place.</p>

          <form id="registerForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
            </div>

            <button type="submit" className="button">
              Create Account
            </button>
          </form>

          {message && <p>{message}</p>}

          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 CareerConnect | COMP229 Group Project</p>
      </footer>
    </>
  )
}

export default Register
