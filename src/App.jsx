import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <>
      <Header />

      <main className='dark:bg-black dark:text-white transition-colors duration-300'>
        <Home />
      </main>

      <Footer />

      <div className='flex justify-center'>
        <ThemeToggle />
      </div>
    </>
  )
}

export default App