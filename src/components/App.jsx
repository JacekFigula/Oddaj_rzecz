import { useState } from 'react'
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import NotFound from "./NotFound.jsx";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Logout from "./Logout.jsx";
import Register from "./Register.jsx";
import Form from "./Form.jsx";

function App() {

  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='oddaj-rzeczy' element={<Form />} />
            <Route path='logowanie' element={<Login />} />
            <Route path='rejestracja' element={<Register />} />
            <Route path='wylogowano' element={<Logout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </HashRouter>

  )
}

export default App
