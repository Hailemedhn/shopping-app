import React, {Component} from "react";
import manny from "../images/manny.jpg";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import  "./Header.css";
class Header extends Component {
    render(){
        return(
            <div className="headerContainer">
                <div className="humberger">
                    <div className="humbergerLine"></div> 
                    <div className="humbergerLine"></div> 
                    <div className="humbergerLine"></div>  
                </div>
                <div className="mannyContainer">
                    <img className="manny" src={manny} />
                </div>
                <div className="logoContainer">
                  <img className="logo" src= {logo}/>
                </div>
                <div className="cartContainer">
                    <img className="cart" src={cart} />
                </div>
            </div>
        )
    }
}
export default Header;