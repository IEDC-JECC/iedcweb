import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SocialPg from './pages/SocialPg'; 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SocialPg></SocialPg>}/>
          <Route path='/about' element={<Home></Home>}/>
          <Route path='/execom' element={<Home></Home>}/>
          <Route path='/gov' element={<Home></Home>}/>
          <Route path='/news' element={<Home></Home>}/>
          <Route path='/events' element={<Home></Home>}/>
          <Route path='/achv' element={<Home></Home>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
