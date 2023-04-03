import './App.css';
import './App.scss';
import Navbar from './components/Navbar';
import Planet from './components/Planet';
import  Home  from './pages/Home';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'


function App() {
 
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Planet />} />
        </Routes>
    </div>
  );
}

export default App;
