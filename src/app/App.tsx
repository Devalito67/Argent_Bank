import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return <BrowserRouter>
      <div className='App'>
        <Header />
        <Router />
        <Footer />
      </div>
  </BrowserRouter>
}

export default App
