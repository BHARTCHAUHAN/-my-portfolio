import React, { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './port.css';

import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import Header from './components/Header';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    // Refresh AOS on route change
    AOS.refresh();
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <Suspense fallback={<Loading message="Loading content..." />}>
        <main>
          <Home />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;