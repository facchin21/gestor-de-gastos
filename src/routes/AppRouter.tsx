import {Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Perfil } from "../pages/Perfil"
import { Descargar } from "../components/Descargar"
import { Gastos } from "../pages/Gastos"
import { Ingresos } from "../pages/Ingresos"
import { Ahorros } from "../pages/Ahorros"

export const AppRouter : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/descargar" element={<Descargar/>}/>
            <Route path="/gastos" element={<Gastos/>}/>
            <Route path="/ingresos" element={<Ingresos/>}/>
            <Route path="/metasdeahorro" element={<Ahorros/>}/>
        </Routes>
    )
}