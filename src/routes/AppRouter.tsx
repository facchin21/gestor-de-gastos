import {Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"

export const AppRouter : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}