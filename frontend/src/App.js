import React  from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import TeamsScreen from './screens/TeamsScreen';
import TeamScreen from './screens/TeamScreen';
import LeaguesScreen from './screens/LeaguesScreen';
import LeagueScreen from './screens/LeagueScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact/>
              <Route path='/teams/' element={<TeamsScreen />} exact/>
              <Route path='team/:id' element={<TeamScreen />} />
              <Route path='/leagues/' element={<LeaguesScreen />} exact/>
              <Route path='league/:id' element={<LeagueScreen />} />
              <Route path='*' element={<h3>Page Not Found</h3>} exact/>
            </Routes>
        </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
