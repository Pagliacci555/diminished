import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import BookingsList from '../components/BookingsList'

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    } else {
      // Optionally fetch user data
      setUser({ name: 'User' })
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }

  if (!user) return <div>Loading...</div>

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Dashboard</h1>
        <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
      </header>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2>Create Booking</h2>
          <BookingForm />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Your Bookings</h2>
          <BookingsList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard