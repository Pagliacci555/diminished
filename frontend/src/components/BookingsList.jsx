import { useState, useEffect } from 'react'
import axios from 'axios'

function BookingsList() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:5000/api/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setBookings(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBookings()
  }, [])

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>{booking.hotelName} - {booking.checkIn} to {booking.checkOut}</li>
        ))}
      </ul>
    </div>
  )
}

export default BookingsList