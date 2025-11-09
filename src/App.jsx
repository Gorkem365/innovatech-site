import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Yolları './Pages/...' olarak güncelledim
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ContactPage from './Pages/ContactPage'

function App() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App