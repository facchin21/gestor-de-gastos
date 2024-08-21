import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { NavbarPublic } from './components/NavbarPublic';
import { AppRouter } from './routes/AppRouter';
import { useAuthStore } from './store/authStore';
function App() {

const title = 'Tu Gasto'
const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  return (
    <div>
      {isAuthenticated
       ? <Navbar title={title}/>
       : <NavbarPublic/>
      }
      <AppRouter/>
      <Footer/>
  </div>
  )
}

export default App
