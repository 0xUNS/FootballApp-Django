import React  from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import Clubs_List_Screen from './screens/Clubs_List_Screen';
import Clubs_Detail_Screen from './screens/Clubs_Detail_Screen';
import Leagues_List_Screen from './screens/Leagues_List_Screen';
import Leagues_Detail_Screen from './screens/Leagues_Detail_Screen';
import About from './screens/About';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact/>
              <Route path='/clubs/' element={<Clubs_List_Screen />} exact/>
              <Route path='/clubs/:id' element={<Clubs_Detail_Screen />} />
              <Route path='/ligues/' element={<Leagues_List_Screen />} exact/>
              <Route path='/ligues/:id' element={<Leagues_Detail_Screen />} />
              <Route path='/about/' element={<About />} />
              <Route path='*' element={<h3>Page Not Found</h3>} exact/>
            </Routes>
        </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
