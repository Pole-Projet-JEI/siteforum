import './app.css';
import {Fragment} from 'react';
import {BrowserRouter as Router,Route,Routes, useLocation} from 'react-router-dom';
import Home from './pages/home/Home';
import Planning from './pages/planning/Planning';
import Stand from './pages/stand/Stand';
import Speakers from './pages/speakers/Speakers';
import Faq from './pages/faq/Faq';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
     
    }
  };
  
  const pageTransition = {
    
  };
  return (
       <div >
          <Router  >
            <ScrollToTop />
            <Fragment>
            <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route exact path='/' element={<Home pageVariants={pageVariants} pageTransition={pageTransition} />} />
                <Route exact path='/planning' element={<Planning pageVariants={pageVariants} pageTransition={pageTransition}/>} />
                <Route exact path='/speakers' element={<Speakers pageVariants={pageVariants} pageTransition={pageTransition}/>} />
                <Route exact path='/stand' element={<Stand pageVariants={pageVariants} pageTransition={pageTransition}/>} />
                
                <Route exact path='/faq' element={<Faq />} />
              </Routes>
            </AnimatePresence>
            </Fragment>
        </Router>
      
        </div>

    
   
  );
}

export default App;
