import {Route, Routes } from "react-router-dom"
import { Home } from "../pages/HomePage"
import { NotFound } from "../pages/NotFoundPage"
import { Login } from "../pages/LoginPage"
import { Register } from "../pages/RegisterPage"
import { ProfilePage } from "../pages/ProfilePage"
import { Descargar } from "../components/Descargar"
import { ExpensePage } from "../pages/ExpensePage"
import { IncomePage } from "../pages/IcomePage"
import { SavingsPage } from "../pages/SavingsPage"
import { RecoverPage } from "../pages/RecoverPage"
import { HomePrivatePage } from "../pages/HomePrivatePage"
import { PrivateRoute } from '../routes/PrivateRoute'
import { useAuthStore } from "../store/authStore"
import { DebsPage } from "../pages/DebsPage"

export const AppRouter : React.FC = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recuperar" element={<RecoverPage/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/home" element={<HomePrivatePage/>}/>
                <Route path="/perfil" element={<ProfilePage/>}/>
                <Route path="/descargar" element={<Descargar/>}/>
                <Route path="/gastos" element={<ExpensePage/>}/>
                <Route path="/ingresos" element={<IncomePage/>}/>
                <Route path="/metasdeahorro" element={<SavingsPage/>}/>
                <Route path="/deudas" element={<DebsPage/>}/>
            </Route>
        </Routes>
    )
}