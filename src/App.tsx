import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer'

import { Carousel } from './components/carousel/Carousel';

function App() {
 
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

const Home = () => (
  <>
    <Carousel />
    {/* <Cards /> */}
  </>
);

export default App
