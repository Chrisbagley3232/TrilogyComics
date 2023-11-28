import React, {Component} from "react";
import tbooth1 from "./tbooth1.PNG";
import tbooth2 from "./tbooth2.PNG";
import thbooth1 from "./thbooth1.PNG";
import thbooth2 from "./thbooth2.PNG";
import thbooth3 from "./thbooth3.PNG";
import bBooth1 from "./bBooth1.PNG";
import bBooth2 from "./bBooth2.PNG";
import bBooth3 from "./bBooth3.PNG";
import bBooth4 from "./bBooth4.PNG";

class Contact extends Component{
    render(){
        return(
            <div>
                <div class="tBoothItemCards">
                        <img alt="tbooth1" src={tbooth1} style={{height: 300,width: 400}} />
                        <img alt="tbooth2" src={tbooth2} style={{height: 300,width: 400}} />
                    </div>

                <div class="tBoothItemCards">
                        <img alt="thbooth1" src={thbooth1} style={{height: 300,width: 400}} />
                        <img alt="thbooth2" src={thbooth2} style={{height: 300,width: 400}} />
                        <img alt="thbooth3" src={thbooth3} style={{height: 300,width: 400}} />

                    </div>
                <div class="tBoothItemCards">
                        <img alt="bBooth1" src={bBooth1} style={{height: 300,width: 400}} />
                        <img alt="bBooth2" src={bBooth2} style={{height: 300,width: 400}} />
                        <img alt="bBooth3" src={bBooth3} style={{height: 300,width: 400}} />
                        <img alt="bBooth4" src={bBooth4} style={{height: 300,width: 400}} />
                    </div>
            </div>
        );
    }
}
export default Contact;