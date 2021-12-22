import './app.css';
import {Fragment} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Planning from './pages/planning/Planning';
import Stand from './pages/stand/Stand';
import Speakers from './pages/speakers/Speakers';
import Faq from './pages/faq/Faq';
function App() {
  return (
    <div className="App">
       <Router>
      <Fragment>
   
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/planning' element={<Planning />} />
          <Route exact path='/speakers' element={<Speakers />} />
          <Route exact path='/stand' element={<Stand />} />
          
          <Route exact path='/faq' element={<Faq />} />
        </Routes>

      </Fragment>
    </Router>
      
    </div>
  );
}

export default App;
