import { Router, Switch, Route } from 'wouter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './helpers/ScrollToTop';
import AdBanner from './components/AdBanner';

function App() {
  return (
    <Router base="/">
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <AdBanner />
        <Navbar />
        <Switch>
          <Route path="/">
            <main>
              <Hero />
              <Features />
              <Services />
              <Clients />
              <Contact />
            </main>
          </Route>
          <Route path="/terms" component={TermsOfService} />
          <Route path="/privacy" component={PrivacyPolicy} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;