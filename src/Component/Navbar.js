import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "hex",
      snackbarStatus: false,
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleCloseSnackbar=this.handleCloseSnackbar.bind(this)
  }
  handleFormatChange(e) {
    this.setState({ selectValue: e.target.value,snackbarStatus:true});
    this.props.changeSelect(e.target.value);
  }
  handleCloseSnackbar(){
      this.setState({
          snackbarStatus:false
      })
  }

  render() {
    const { range, changeRange } = this.props;
    const { selectValue, snackbarStatus } = this.state;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="#">ColorMine</a>
        </div>
        <div className="sliderContainer">
          <span>Level-{range}</span>
          {/* we are giving step 100 bcoz our range is in 100 otherwise slider value was 248, 456 like that  */}
          <div className="slider">
            <Slider
              defaultValue={range}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeRange}
            />
          </div>
        </div>
        <div className="navbar-select">
          <Select value={selectValue} onChange={this.handleFormatChange}>
            <MenuItem value={"hex"}>Hex-#ffffff</MenuItem>
            <MenuItem value={"rgb"}>RGB-rgb(255,255,255)</MenuItem>
            <MenuItem value={"rgba"}>RGBA-rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          // position of snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          //  automatically closed in 3sec
          autoHideDuration={3000}
          //  msg shown in snackbar
          message={<span id="message-id">Format Changed To- {selectValue.toUpperCase()}</span>}
        //   for screen readers
        ContentProps={{
            'aria-describedby': 'message-id',
          }}
          // showing situation of snackbar
          open={snackbarStatus}
        //   autohideduration will not work if we dont put onClose and is also helpful to close it when u click anywhere in screen  
          onClose={this.handleCloseSnackbar}
          action={[
            <IconButton  color="inherit"  onClick={this.handleCloseSnackbar}   >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
