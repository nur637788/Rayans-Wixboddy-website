
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-white text-black'>
      <Header />

      <div className='flex justify-center items-center min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
