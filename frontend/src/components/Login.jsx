import { useState } from 'react'
import axios from 'axios'

function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      onLogin(res.data.user)
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      <button type="button" onClick={onSwitch}>Register</button>
    </form>
  )
}

export default Login