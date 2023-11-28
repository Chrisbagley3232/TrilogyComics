import React, {Component} from "react";
import Avengers from "./Avengers.PNG";
import Alice from "./Alice.PNG";
import AppleBlack from "./AppleBlack.PNG";
import CapitanAmerica from "./CapitanAmerica.PNG"; 

class WeeklyDeals extends Component{
    render(){
        return(
            <div>
                <div class="itemCards">
                    <img alt="Avengers" src={Avengers} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>Avengers West Coast Vol.2</p>
                            <p>MSRP $13.99</p>
                        </div>
                </div>
                <div class="itemCards">
                    <img alt="Alice" src={Alice} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>Alice Neverafter Vol.5</p> 
                            <p>MSRP $9.99</p>
                        </div>
                </div>
                <div class="itemCards">    
                    <img alt="AppleBlack" src={AppleBlack} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>AppleBlack Vol.4</p>
                            <p>MSRP $5.99</p>
                        </div>
                </div>
                <div class="itemCards">
                    <img alt="CapitanAmerica" src={CapitanAmerica} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>Capitan America Vol.3</p>
                            <p>MSRP $11.99</p>
                        </div>
                </div>
            </div>
        );
    }
}
export default WeeklyDeals;