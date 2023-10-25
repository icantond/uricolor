import './App.css';
import NavBar from './components/navbar/NavBar';
// import Inicio from './pages/Inicio';
// import Nosotros from './pages/Nosotros';
// import Productos from './pages/Productos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';
import SaludVisual from './pages/SaludVisual';
import Promociones from './pages/Promociones';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {/* <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productos' element={<Productos />} /> */}
          <Route path='/contacto' element={<Contact />} />
          <Route path='/salud-visual' element={<SaludVisual />} />
          <Route path='/promociones' element={<Promociones />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;