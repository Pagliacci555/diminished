import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f0f8ff' }}>
      <h1>Welcome to Booking App</h1>
      <p>Book your perfect stay with us.</p>
      <Link to="/login" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Login</Link>
      <Link to="/register" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Register</Link>
    </div>
  )
}

export default Home