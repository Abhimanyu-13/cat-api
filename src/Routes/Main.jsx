import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Logout } from '../Pages/Logout'
import { LoginPage } from '../Pages/LoginPage'

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
