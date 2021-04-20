import logo from './logo.svg';
import './App.css';
import {Footer } from '../src/components/Footer'
import {Header } from '../src/components/Header'
import {MainPage } from '../src/components/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
