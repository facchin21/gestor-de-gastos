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
import { RecuperarPage } from "../pages/RecuperarPage"
import { HomePrivatePage } from "../pages/HomePrivatePage"
import { PrivateRoute } from '../routes/PrivateRoute'
import { useAuthStore } from "../store/authStore"

export const AppRouter : React.FC = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recuperar" element={<RecuperarPage/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/home" element={<HomePrivatePage/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/descargar" element={<Descargar/>}/>
                <Route path="/gastos" element={<Gastos/>}/>
                <Route path="/ingresos" element={<Ingresos/>}/>
                <Route path="/metasdeahorro" element={<Ahorros/>}/>
            </Route>
        </Routes>
    )
}