import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProfilePage from '../pages/ProfilePage';



const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/profile/:name" element={<ProfilePage/>} />
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/loggin' element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default Router;