import React,{ Component } from "react";
import pizza from "../images/pizza.webp";
import "./Middle.css";

class Middle extends Component {
    render(){
        return(
            <div className="pizzaContainer">
                <img className="pizza" src={pizza} />
            </div>
        )
    }
}
export default Middle;