import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Logout } from '../Pages/Logout'
import { LoginPage } from '../Pages/LoginPage'
import Profile from '../Pages/Profile'
import { PrivateRoute } from '../Components/PrivateRoute'
import BreedDetails from '../Pages/BreedDetails'
import CatBreeds from '../Pages/CatBreeds'

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<PrivateRoute Component={Home} />} />
                <Route path='/cat-breeds/breeds/:breedId' element={<PrivateRoute Component={BreedDetails} />} />
                <Route path='/logout' element={<PrivateRoute Component={Logout} />} />
                <Route path='/cat-breeds' element={<PrivateRoute Component={CatBreeds} />} />
                <Route path='/profile' element={<PrivateRoute Component={Profile} />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}
