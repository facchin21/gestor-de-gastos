import { Navbar } from './components/Navbar';
import { AppRouter } from './routes/AppRouter';
function App() {

const title = 'Tu Gasto'
  return (
    <div>
      <Navbar title={title}/>
    <>
      <AppRouter/>
    </>
  </div>
  )
}

export default App
