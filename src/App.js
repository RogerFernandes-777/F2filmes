
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './styles/App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/home' element={<Home />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
