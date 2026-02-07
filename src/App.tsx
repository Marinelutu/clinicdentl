import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import { BookingProvider, useBooking } from './context/BookingContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Cosmetic } from './pages/Cosmetic';
import { NewPatients } from './pages/NewPatients';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import BookingModal from './components/BookingModal';

function GlobalBookingModal() {
  const { isBookingOpen, closeBooking } = useBooking();
  return <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />;
}

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-ivory-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cosmetic" element={<Cosmetic />} />
                <Route path="/new-patients" element={<NewPatients />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <GlobalBookingModal />
          </div>
        </Router>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;
