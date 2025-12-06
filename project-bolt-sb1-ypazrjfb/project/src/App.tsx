import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Maintenance from './components/Maintenance';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Maintenance />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
