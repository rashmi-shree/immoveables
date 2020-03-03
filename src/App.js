import React,{Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

class App extends Component {
  render(){
    return(
      <div className="App">
       <NavBar />
       <Body />
       <Footer />
      </div>
      );  
  }
  
}

export default App;
