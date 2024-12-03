import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-blue-500 flex text-gray-300 justify-between items-center px-6">
      <Link to="/">
        <div className="flex items-center space-x-4">
          <img className="h-8" src="logo.jfif" alt="Logo" />
          <h1 className="text-lg">Cat - Lover</h1>
        </div>
      </Link>
    </nav>
  )
}
