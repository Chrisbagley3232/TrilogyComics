//Chris Bagley
//8/5/2023
import React, {Component} from "react";
import{
    Route, Routes,
    NavLink,
    HashRouter
    }from "react-router-dom";
    import Home from "./Home";
    import NewComics from "./NewComics";
    import NewManga from "./NewManga";
    import ConventionDisplays from "./ConventionDisplays";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1 class="title">TRILOGY COMICS</h1>
                    <div className="sBar">  
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="Buttons">
                        <button class="CartBtn">Cart</button>
                        <button class="AccountBtn">My Account</button>
                    </div>

                    <ul className="header">
                        <li><NavLink to ="/home">Home</NavLink></li>
                        <li><NavLink to="/NewComics">New Comics</NavLink></li>
                        <li><NavLink to="/NewManga">New Manga</NavLink></li>
                        <li><NavLink to="/ConventionDisplays">Convention Displays</NavLink></li>
                        <li>New Toys</li> 
                        <li>Subscription</li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/NewComics" element={<NewComics />}/>
                        <Route path="/NewManga" element={<NewManga />}/>
                        <Route path="/ConventionDisplays" element={<ConventionDisplays />}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;