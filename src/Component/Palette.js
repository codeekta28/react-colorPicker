import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Palette.css";

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: 500,
      select: "hex",
    };
    this.handleSlider = this.handleSlider.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSlider(newvalue) {
    this.setState({ range: newvalue });
  }
  handleSelect(val) {
    this.setState({
      select: val,
    });
  }
  render() {
    // shortcut to use state and props
    const { range, select } = this.state;
    const { colors, paletteName, emoji } = this.props.pal;

    const colorBox = colors[range].map((color) => {
      return <ColorBox name={color.name} bg={color[select]} />;
      // we used color.hex to access the hex color but now we have the select state value which is a variable so to access it we cant use . but will use []
      //  <ColorBox bg={color.hex} name={color.name} />;
    });

    return (
      <div className="palette">
        {/* navbar */}
        <Navbar
          range={range}
          changeRange={this.handleSlider}
          changeSelect={this.handleSelect}
        />
        <div className="palette-color">{colorBox}</div>
        <footer className="palette-footer">
          <span className="footer-name">{paletteName}</span>
         <span className="footer-emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
// To install chromajs which is library for colors npm install --save chroma-js
// import chroma from "chroma-js";
