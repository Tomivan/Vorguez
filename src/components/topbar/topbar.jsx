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
                    <FontAwesomeIcon icon={faTableColumns} />
                </div>
                <div className="a">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
           </div>
           <div className="center">
                <FontAwesomeIcon icon={faCirclePlus} />
                <input type="text" value="Vorgez.com" className="address" />
           </div>
           <div className="right">
                <FontAwesomeIcon icon={faCircleArrowDown} />
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faCopy} />
           </div>
        </div>
    )
}

export default Topbar;