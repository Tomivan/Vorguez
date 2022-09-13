import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faArrowUpFromBracket, faCopy, faPlus, faCirclePlus, faChevronLeft, faChevronRight, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import './topbar.css';

const Topbar = () => {
    return(
        <div className="topbar">
           <div className="left">
                <div className="a">
                    <span className="red"> x </span>
                    <span className="yellow"> - </span>
                    <span className="green"> + </span>
                </div>
                <div className="a">
                    <FontAwesomeIcon icon={faTableColumns} className="icon"/>
                </div>
                <div className="a">
                    <FontAwesomeIcon icon={faChevronLeft} className="icon"/>
                    <FontAwesomeIcon icon={faChevronRight} className="icon"/>
                </div>
           </div>
           <div className="center">
                <FontAwesomeIcon icon={faCirclePlus} className="center-icon"/>
                <input type="text" placeholder="Vorgez.com" className="address" />
           </div>
           <div className="right">
                <FontAwesomeIcon icon={faCircleArrowDown} className="icon"/>
                <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon"/>
                <FontAwesomeIcon icon={faPlus} className="icon"/>
                <FontAwesomeIcon icon={faCopy} className="icon"/>
           </div>
        </div>
    )
}

export default Topbar;