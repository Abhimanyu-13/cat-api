import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Logout } from '../Pages/Logout'
import { LoginPage } from '../Pages/LoginPage'
import Profile from '../Pages/Profile'
import { PrivateRoute } from '../Components/PrivateRoute'
import Cats from '../Pages/Cats'

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRoute Component={Home} />} />
                <Route path='/logout' element={<PrivateRoute Component={Logout} />} />
                <Route path='/cats' element={<PrivateRoute Component={Cats} />} />
                <Route path='/profile' element={<PrivateRoute Component={Profile} />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
