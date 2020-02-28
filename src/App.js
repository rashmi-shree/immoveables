import React,{Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import SubNavBar from './components/SubNavBar/SubNavBar'

class App extends Component {
  render(){
    return (
      <div className="App">
       <NavBar />
       <SubNavBar />
      </div>
      );  
  }
  
}

export default App;
