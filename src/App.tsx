import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { BookingProvider, useBooking } from './context/BookingContext';
import { QuizProvider } from './context/QuizContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Cosmetic = lazy(() => import('./pages/Cosmetic').then(m => ({ default: m.Cosmetic })));
const NewPatients = lazy(() => import('./pages/NewPatients').then(m => ({ default: m.NewPatients })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Specialists = lazy(() => import('./pages/Specialists').then(m => ({ default: m.Specialists })));
const ServicePage = lazy(() => import('./pages/ServicePage').then(m => ({ default: m.ServicePage })));

import BookingModal from './components/BookingModal';
import QuizModal from './components/QuizModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import { FloatingChatButton } from './components/FloatingChatButton';
import ErrorBoundary from './components/ErrorBoundary';

function GlobalBookingModal() {
  const { isBookingOpen, closeBooking } = useBooking();
  return <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />;
}

function LoadingFallback() {
  const { t } = useLanguage();
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-primary font-medium">{t.common?.loading || 'Se încarcă...'}</p>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/cosmetic" element={<Cosmetic />} />
          <Route path="/new-patients" element={<NewPatients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/specialists" element={<Specialists />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <QuizProvider>
          <Router>
            <ErrorBoundary>
              <ScrollToTop />
              <div className="min-h-screen flex flex-col bg-ivory-50">
                <Header />
                <main className="flex-grow">
                  <AnimatedRoutes />
                </main>
                <Footer />
                <GlobalBookingModal />
                <QuizModal />
                <StickyMobileCTA />
                <FloatingChatButton />
              </div>
            </ErrorBoundary>
          </Router>
        </QuizProvider>
      </BookingProvider>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
