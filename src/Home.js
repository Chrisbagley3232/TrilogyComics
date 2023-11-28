import React, {Component} from "react";
import SpidermanComic from "./SpidermanComic.PNG";
import NinjaTurtleFigure from "./NinjaTurtleFigure.PNG";
import jjkManga from "./jjkManga.PNG";
import VBstore from "./VBstore.PNG";
import Nstore from "./Nstore.PNG";

class Home extends Component{
    render(){
        return(
            <div>
                <div class="lHeader">
                    <h2>Come visit us at one of our 2 locations!!</h2>
                </div>
                <div class="hItemCards">
                    <img alt="SpidermanComic" src={SpidermanComic} style={{height: 200,width: 140}} />
                        <div class="description">
                            <p>New comics everyweek!</p>
                        </div>
                </div>
                <div class="hItemCards">
                    <img alt="NinjaTurtleFigure" src={NinjaTurtleFigure} style={{height: 200,width: 160}} />
                        <div class="description">
                            <p>Figures for the whole family</p> 
                        </div>
                </div>
                <div class="hItemCards">    
                    <img alt="jjkManga" src={jjkManga} style={{height: 200,width: 140}} />
                        <div class="description">
                            <p>Lots of new manga</p>
                        </div>
                </div>
                <div class="lItemCards">
                        <div class="location">
                            <p>Address:</p>
                            <p>700 E. Little Creek Rd.</p>
                            <p>Norfolk, VA 23518</p>
                            <p><br></br>Phone:</p>
                            <p>757-587-2540</p>
                            <img alt="Nstore" src={Nstore} style={{height: 150,width: 300}} />
                            <div class="hours">
                                <p class="hours">Hours:</p>
                                <p class="hours">Mon: 11AM - 7PM</p>
                                <p class="hours">Tues: Closed</p>
                                <p class="hours">Wed: 11AM - 7PM</p>
                                <p class="hours">Thur: Closed</p>
                                <p class="hours">Fri: 11AM - 7PM</p>
                                <p class="hours">Sat: 10AM - 7PM</p>
                                <p class="hours">Sun: Noon - 6PM</p>
                            </div>
                        </div>
                </div>
                <div class="l2ItemCards">
                        <div class="location">
                            <p>Address:</p>
                            <p>5773 Princess Anne Rd.</p>
                            <p>Virginia Beach, VA 23462</p>
                            <p><br></br>Phone:</p>
                            <p>757-409-2205</p>
                            <img alt="VBstore" src={VBstore} style={{height: 150,width: 300}} />
                            <div class="hours">
                                <p class="hours">Hours:</p>
                                <p class="hours">Mon: 10AM - 7PM</p>
                                <p class="hours">Tues: 10AM - 7PM</p>
                                <p class="hours">Wed: 10AM - 7PM</p>
                                <p class="hours">Thur: 10AM - 7PM</p>
                                <p class="hours">Fri: 10AM - 7PM</p>
                                <p class="hours">Sat: 10AM - 7PM</p>
                                <p class="hours">Sun: Noon - 6PM</p>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}
export default Home;