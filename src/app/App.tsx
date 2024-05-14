import './App.css'
import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return <BrowserRouter>
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Router />
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
}

export default App
