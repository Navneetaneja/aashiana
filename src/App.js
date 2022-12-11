import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Aashiana from './Aashiana.js';
import Header from './Header.js';
import Events from './Events.js';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Aashiana/>}></Route>
        <Route path='/all-events' element={<Events/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
