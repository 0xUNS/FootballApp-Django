import React  from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ClubsListScreen from './screens/ClubsListScreen';
import ClubDetailScreen from './screens/ClubDetailScreen';
import LeaguesListScreen from './screens/LeaguesListScreen';
import LeagueDetailScreen from './screens/LeagueDetailScreen';
import About from './screens/About';
import Search from './screens/Search';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact/>
              <Route path='/clubs/' element={<ClubsListScreen />} exact/>
              <Route path='/clubs/:id' element={<ClubDetailScreen />} />
              <Route path='/ligues/' element={<LeaguesListScreen />} exact/>
              <Route path='/ligues/:id' element={<LeagueDetailScreen />} />
              <Route path='/about/' element={<About />} />
              <Route path='/search/:keyword' element={<Search />} />
              <Route path='*' element={<h3>Page Introuvable</h3>} exact/>
            </Routes>
        </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
