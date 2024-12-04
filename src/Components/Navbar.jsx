import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-navbarColor flex text-gray-300 justify-between items-center px-6">
      <Link to="/">
        <div className="flex items-center space-x-4">
          <img className="h-8" src="logo.jfif" alt="Logo" />
          <h1 className="text-lg">Pet - Lover</h1>
        </div>
      </Link>
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="hover:border px-4 py-2 rounded-lg border-slate-300">Home</Link>
        <Link to="/Profile" className="hover:border px-4 py-2 rounded-lg border-slate-300">Profile</Link>
      </div>
    </nav>
  )
}
export default Navbar;