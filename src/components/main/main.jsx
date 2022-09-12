import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import data from "../../data/data";
import './main.css';

const Main = () => {
    return(
        <div className="main">
            <div className="top">
                <div className="left">
                    <p>Show 8 entries</p>
                </div>
                <div className="right">
                    <img src="" alt="" />
                    <input type="text" placeholder="Search name,email, etc" className="search"/>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data => (<tr>
                        <td><input type="checkbox"/></td>
                        <td>{data.name}{data.firstname}</td>
                        <td>{data.email}{data.phoneno}</td>
                        <td>{data.status}</td>
                        <td>{data.address}</td>
                        <td><FontAwesomeIcon icon={faPen} /><FontAwesomeIcon icon={faTrashCan} /></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Main;