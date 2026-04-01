import { useState } from 'react'
import axios from 'axios'

function Register({ onRegister }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password })
      alert('Registered')
      onRegister()
    } catch (err) {
      alert('Registration failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
      <button type="button" onClick={onRegister}>Back to Login</button>
    </form>
  )
}

export default Register