import React from'react';
import './App.css'

import Home from './components/HomePage/Home';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Footer from './components/HomePage/Footer'
import Navbar from './components/Navbar/Navbar';

import Gamepage from './components/GamePageloader/game page/Gamepage';



const App=()=>{
    return(<>
    <Router>
        <Navbar/>
    
        <Switch>
            <Route exact path="/Home" render={()=><Home/>}/>
            <Route exact path="/game"  render={()=><Gamepage/>}/>
        </Switch>
        <Footer/>
    </Router>
   
       
      
    </>);
}

export default App;