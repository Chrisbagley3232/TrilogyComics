import React, {Component} from "react";
import jjkManga from "./jjkManga.PNG";
import FireForceManga from "./FireForceManga.PNG";
import ChainsawManManga from "./ChainsawManManga.PNG";
import MyHeroManga from "./MyHeroManga.PNG"; 

class Stuff extends Component{
    render(){
        return(
            <div>
                <div class="itemCards">
                    <img alt="jjkManga" src={jjkManga} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>Jujustu Kaisen Vol.21</p>
                            <p>MSRP $10.99</p>
                        </div>
                </div>
                <div class="itemCards">
                    <img alt="FireForceManga" src={FireForceManga} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>Fire Force Vol.34</p> 
                            <p>MSRP $9.99</p>
                        </div>
                </div>
                <div class="itemCards">    
                    <img alt="ChainsawManManga" src={ChainsawManManga} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>Chainsaw Man Vol.12</p>
                            <p>MSRP $13.99</p>
                        </div>
                </div>
                <div class="itemCards">
                    <img alt="MyHeroManga" src={MyHeroManga} style={{height: 300,width: 200}} />
                        <div class="description">
                            <p>My Hero Academia Vol.37</p>
                            <p>MSRP $9.99</p>
                        </div>
                </div>
            </div>
        );
    }
}
export default Stuff;