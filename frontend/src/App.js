import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScrean from './screen/HomeScrean'
import ProductDetails from './screen/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className='my-3'>
          <Routes>
            <Route path='/' element={<HomeScrean />} exact />
            <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </Container>

    </Router>

  );
}

export default App;
