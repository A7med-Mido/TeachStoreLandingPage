import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import ProductSection from './components/sections/ProductSection'

function App() {

  return (
    <div className='h-screen w-full flex-col justify-start items-center'>
      <Navbar />
      <HeroSection />
      <ProductSection />
    </div>
  )
}

export default App
