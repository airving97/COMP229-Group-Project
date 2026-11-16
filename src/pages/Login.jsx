
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Login is ready for backend integration.')
  }

  return (
    <>
      <header>
        <div className="logo">
          Career<span>Connect</span>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome Back!</h1>
          <p>Login to manage your job applications and appointments.</p>

          <form id="loginForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <button type="submit" className="button">Login</button>
          </form>

          {message && <p>{message}</p>}

          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 CareerConnect | COMP229 Group Project</p>
      </footer>
    </>
  )
}

export default Login
