
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-white text-black'>
      <Header />

      <div className='m-auto min-h-screen max-w-[1920px] '>
        <Outlet />
      </div>
      <div className='m-auto max-w-[1920px] '>
        <Footer />
      </div>
    </div>
  )
}

export default App
