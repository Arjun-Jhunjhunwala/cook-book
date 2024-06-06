import Navbar from './components/Navbar';
import './App.css';
import {Home} from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
