// import logo from './logo.svg';
// import './App.css';
import Classprops from './Classprops'
import React from 'react';
import Functionprops from './Functionprops';

class App extends React.Component{
  render(){
    return(
      <div>
        <Classprops name="Customer 1" place="Asaba"><p>We love you..</p></Classprops>
        <Classprops name="Customer 2" place="Asaba"/>
        <Classprops name="Customer n"><button>Register</button></Classprops>
        <Functionprops name="AGES" name2="GENDERS"/>
      </div>
    )
  }
}

export default App;
