
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      title: 'Software Developer',
      company: 'Google',
      date: '2026-11-01',
      status: 'Under Review'
    },
    {
      id: 2,
      title: 'Web Developer Intern',
      company: 'Microsoft',
      date: '2026-11-02',
      status: 'Interview'
    },
    {
      id: 3,
      title: 'Junior Programmer',
      company: 'Amazon',
      date: '2026-11-03',
      status: 'Applied'
    }
  ])

  const [appointments, setAppointments] = useState([])
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  function addApplication(event) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const newApplication = {
      id: Date.now(),
      title: data.get('title'),
      company: data.get('company'),
      date: data.get('date'),
      status: data.get('status')
    }

    setApplications([...applications, newApplication])
    form.reset()
    setShowApplicationForm(false)
  }

  function deleteApplication(id) {
    setApplications(applications.filter(app => app.id !== id))
  }

  function editApplication(app) {
    const title = prompt('Edit job title:', app.title)
    if (title === null || title.trim() === '') return

    const company = prompt('Edit company:', app.company)
    if (company === null || company.trim() === '') return

    const status = prompt('Edit status:', app.status)
    if (status === null || status.trim() === '') return

    setApplications(applications.map(item =>
      item.id === app.id
        ? { ...item, title, company, status }
        : item
    ))
  }

  function addAppointment(event) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const newAppointment = {
      id: Date.now(),
      type: data.get('type'),
      date: data.get('date'),
      time: data.get('time'),
      location: data.get('location')
    }

    setAppointments([...appointments, newAppointment])
    form.reset()
    setShowAppointmentForm(false)
  }

  function deleteAppointment(id) {
    setAppointments(appointments.filter(app => app.id !== id))
  }

  return (
    <>
      <header>
        <div className="logo">
          Career<span>Connect</span>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <main>
        <section className="welcome">
          <h2>Welcome to Your Dashboard!</h2>
          <p>Manage your job applications and appointments in one place.</p>
        </section>

        {/* Job Applications */}
        <section className="dashboard-section">
          <h2>My Job Applications</h2>

          <button
            className="button"
            onClick={() => setShowApplicationForm(!showApplicationForm)}
          >
            + Add Application
          </button>

          {showApplicationForm && (
            <form className="dashboard-form" onSubmit={addApplication}>
              <h3>Add a Job Application</h3>

              <label>Job Title:</label>
              <input name="title" type="text" required />

              <label>Company:</label>
              <input name="company" type="text" required />

              <label>Date Applied:</label>
              <input name="date" type="date" required />

              <label>Status:</label>
              <select name="status">
                <option>Applied</option>
                <option>Under Review</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Accepted</option>
              </select>

              <button type="submit" className="button">
                Save Application
              </button>
            </form>
          )}

          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td>{app.title}</td>
                  <td>{app.company}</td>
                  <td>{app.date}</td>
                  <td>{app.status}</td>
                  <td>
                    <button onClick={() => editApplication(app)}>
                      Edit
                    </button>
                    {' '}
                    <button onClick={() => deleteApplication(app.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Appointments */}
        <section className="dashboard-section">
          <h2>My Appointments</h2>

          <button
            className="button"
            onClick={() => setShowAppointmentForm(!showAppointmentForm)}
          >
            + Book Appointment
          </button>

          {showAppointmentForm && (
            <form className="dashboard-form" onSubmit={addAppointment}>
              <h3>Book an Appointment</h3>

              <label>Appointment Type:</label>
              <select name="type" required>
                <option value="Career Counselling">Career Counselling</option>
                <option value="Resume Review">Resume Review</option>
                <option value="Interview Preparation">
                  Interview Preparation
                </option>
              </select>

              <label>Date:</label>
              <input name="date" type="date" required />

              <label>Time:</label>
              <input name="time" type="time" required />

              <label>Location:</label>
              <select name="location">
                <option value="Online">Online</option>
                <option value="Career Centre">Career Centre</option>
              </select>

              <button type="submit" className="button">
                Confirm Booking
              </button>
            </form>
          )}

          <table>
            <thead>
              <tr>
                <th>Appointment</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map(app => (
                <tr key={app.id}>
                  <td>{app.type}</td>
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td>{app.location}</td>
                  <td>
                    <button onClick={() => deleteAppointment(app.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>© 2026 CareerConnect. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Dashboard
