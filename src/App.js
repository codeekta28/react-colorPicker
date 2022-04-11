import logo from './logo.svg';
import SeedColor from './SeedColor';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Palette from './Component/Palette';
import { generatePalette } from './Component/ColorHelper';
import { Component } from 'react';
import RouteManagement from './Component/RouteManagement';


class App extends Component {
constructor(props){
  super(props);
  this.state={

  }
  this.findPallet=this.findPallet.bind(this)

}
findPallet(id){
return SeedColor.find((val)=>{
  return val.id===id
})

}


  render(){
    return (
      <div className="App">
        {/* {console.log("seedcolor",SeedColor[5])}
        {console.log("palletee",generatePalette(SeedColor[5]))} */}
        {/* <Routes>
          <Route path="/" element={<RouteManagement/>}/>
          <Route path="/palette/:id" element={<RouteManagement generatePal={this.findPallet} />}/>
        </Routes> */}
  
      {/* <Palette pal={SeedColor[4]}/> */}
      {/* we are passing it with the prop name pal here seedColor[4] is the object with collection of keys and values */}
      {/* <Palette {...SeedColor[4]}/> */}
      {/* here we are deconstruction the object where each key value pair is passed individualy */}
      {/* we are passing the value from generate palette */}
      <Palette pal={generatePalette(SeedColor[1])} />
     
    
  
      
      </div>
    );
  }
  }
  

export default App;
