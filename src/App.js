import React,{Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Lowerbody from './components/Lowerbody/Lowerbody';

class App extends Component {
  render(){
    return(
      <div className="App">
       <NavBar />
       <Body />
       <Lowerbody />
       <Footer />
      </div>
      );  
  }
  
}

export default App;
