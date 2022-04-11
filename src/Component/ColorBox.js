import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={
            copied:false
        }
        this.handleCopy=this.handleCopy.bind(this)
    }
    handleCopy(){
        this.setState({copied:true},()=>{
            setTimeout(() => {
                this.setState({copied:false})
            }, 1500);
        })
    }
  render() {
    const { bg, name } = this.props;
    const{copied}=this.state
    return (
      // text is what you want to copy
      <CopyToClipboard text={bg} onCopy={this.handleCopy}>
        <div style={{ backgroundColor: bg }} className="colorBox">
          {/* we are creating sepearte div because if we scale the above div its content will also get scaled */}
          <div
            className={`colorbox-overlay ${copied && `show`} `}
            style={{ backgroundColor: bg }}
          ></div>
          <div className={`colorbox-copiedMsg ${copied && `show`}`}>
              <h1>Copied</h1>
              <p>{bg}</p>
          </div>
          <div className="colorbox-container">
            <div className="colorBox-content">
              <span>{name}</span>
            </div>
            <button className="colorBox-button">Copy</button>
          </div>
          <span className="colorBox-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
// notes
// 1.I have used copy to clipboard library to copy the content it is bookmarked  In UI Tools & design folder in my laptop
