import React from "react";
import './topbar.css';

const Topbar = () => {
    return(
        <div className="topbar">
           <div className="left">
                <div className="a">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="a">
                    <img src="" alt="" />
                </div>
                <div className="a">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
           </div>
           <div className="center">
                <img src="" alt="" />
                <input type="text" value="Vorgez.com" class="address" />
           </div>
           <div className="right">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
           </div>
        </div>
    )
}

export default Topbar;