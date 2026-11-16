
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <header>
        <div className="logo">
          Career<span>Connect</span>
        </div>

        <nav>
  <a href="#features">Features</a>
  <Link to="/dashboard#jobs">Job Tracker</Link>
  <Link to="/dashboard#appointments">Appointments</Link>
  <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
</nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to CareerConnect</h1>

          <p>
            Keep your job search organized in one place.
            Track applications, manage interview appointments,
            and stay on top of your next opportunity.
          </p>

          <Link className="button" to="/register">
            Get Started
          </Link>
        </section>

        <section className="features" id="features">
          <div className="card">
            <h2>Job Application Tracker</h2>
            <p>
              Keep track of the jobs you've applied for,
              update application statuses, and organize
              important job details.
            </p>
          </div>

          <div className="card">
            <h2>Appointment Booking</h2>
            <p>
              Manage your upcoming interviews and appointments.
              Stay organized by keeping important dates
              and scheduling details together.
            </p>
          </div>

          <div className="card">
            <h2>Easy Organization</h2>
            <p>
              Access your job applications and appointments
              through one simple platform.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 CareerConnect | COMP229 Group Project</p>
      </footer>
    </>
  )
}

export default Home
