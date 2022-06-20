import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Contribuicoes from './components/pages/Contribuicoes';
import Escala from './components/pages/Escala';
import FaleConosco from './components/pages/FaleConosco';
import Home from './components/pages/Home'
import SobreNos from './components/pages/SobreNos';
// 
// import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Header />

      {/* <Container> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sobrenos' element={<SobreNos />}></Route>
        <Route path='/escala' element={<Escala />}></Route>
        <Route path='/contribuicoes' element={<Contribuicoes />}></Route>
        <Route path='/faleconosco' element={<FaleConosco />}></Route>
      </Routes>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
