import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'

function App() {

  return (
    <div className='h-screen w-full flex-col justify-start items-center'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
