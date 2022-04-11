import React from 'react'
import Palette from './Palette'
import { generatePalette } from './ColorHelper'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SeedColor from '../SeedColor'



function RouteManagement(props) {
  {/* <Palette pal={generatePalette(SeedColor[0])} /> */}
    const {id}=useParams()
    const location=useLocation()
    console.log("location",location);
    console.log("path",`/palette/${id}`);
    console.log("props",props.generatePal("flat-ui-colors-dutch"));
  if (location.pathname===`/palette/${id}`){
        return  <Palette pal={generatePalette(props.generatePal(id))}/>
        // <Palette pal={generatePalette(SeedColor[4])} />
    }else if(location.pathname=="/"){
        return(<h1>This is home</h1>)
    }
    // return (
    //     <div>
    //         {/* <h1>The id is {id}</h1> */}
        
           
    //     </div>
    // )

}

export default RouteManagement
