import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import './App.css';
// Pages
import Home from './components/Home';
import Filmography from './components/Filmography';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <>
      <Header />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Filmography' element={<Filmography />} />
         <Route path='/About' element={<About />} />
         <Route path='/Gallery' element={<Gallery/>} />
         <Route path='/ContactUs' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
