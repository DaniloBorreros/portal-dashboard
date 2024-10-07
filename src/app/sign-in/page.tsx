'use client'

import Image from 'next/image'
import { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!username || !password) {
      setError('Both fields are required')
      return
    }

    setLoading(true)
    try {
      // Call your login API here
      console.log({ username, password })
      // After successful login:
      setLoading(false)
    } catch (err) {
      setError('Login failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-b from-yellow-300 to-blue-700 h-full">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/csuLogo.png"
            alt="CSU Logo"
            width={300}
            height={300}
            className="mb-10"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">CAVITE STATE UNIVERSITY</h1>
            <p className="font-bold text-center text-white">BACOOR CITY CAMPUS</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-5">
          <div className="flex flex-col items-center justify-center mb-10">
            <Image src="/portal1.png" alt="Banner" width={900} height={900} className="mt-10" />
          </div>
          <h1 className="text-3xl font-bold text-left mb-4">Login</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Student Number
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-sm">Remember me</label>
            </div>
            <p className="text-sm text-right">
              Don’t have an account?
              <a href="/sign-up" className="text-blue-500 hover:text-blue-700">&nbsp;Create Request</a>
            </p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
