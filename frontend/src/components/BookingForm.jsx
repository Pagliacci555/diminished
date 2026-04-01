import { useState } from 'react'
import axios from 'axios'

function BookingForm() {
  const [hotelName, setHotelName] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await axios.post('http://localhost:5000/api/bookings', { hotelName, checkIn, checkOut, guests, totalPrice }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Booking created')
    } catch (err) {
      alert('Booking failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Hotel Name" value={hotelName} onChange={(e) => setHotelName(e.target.value)} required />
      <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
      <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      <input type="number" placeholder="Total Price" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} required />
      <button type="submit">Book</button>
    </form>
  )
}

export default BookingForm