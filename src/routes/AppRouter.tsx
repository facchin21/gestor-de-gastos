import {Route, Routes } from "react-router-dom"
import { Home } from "../pages/HomePage"
import { NotFound } from "../pages/NotFoundPage"
import { Login } from "../pages/LoginPage"
import { Register } from "../pages/RegisterPage"
import { Perfil } from "../pages/PerfilPage"
import { Descargar } from "../components/Descargar"
import { Gastos } from "../pages/GastosPage"
import { Ingresos } from "../pages/IngresosPage"
import { Ahorros } from "../pages/AhorrosPage"

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