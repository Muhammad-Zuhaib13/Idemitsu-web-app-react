import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage';
import About from '../pages/aboutpage';
import Services from '../pages/servicespage';
import Buy from '../pages/wheretobuy';
import Contact from '../pages/contactpage';
import Products from '../pages/products';
import ProductDetails from '../pages/productdetails';

const MainRouters = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Product Details' element={<ProductDetails />}/>
                    <Route path='/Where to buy' element={<Buy />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRouters