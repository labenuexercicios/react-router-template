import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";
import HomePage from "../../pages/HomePage";
import ErrorPage from "../../pages/ErrorPage";

 const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/profile/:name" element={<ProfilePage /> }/>
            <Route path="#" element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}


export default Router;