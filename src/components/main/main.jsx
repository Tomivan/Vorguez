import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                    <input type="text" placeholder="Search name,email, etc" className="search"/>
                </div>
            </div>
            <div className="table-container">
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
                            <td className="name">
                                <img src={data.img} alt="" className="image"/>
                                <div className="float-right">
                                    <p>{data.name}</p>
                                    <p>{data.firstname}</p>
                                </div>
                            </td>
                            <td >
                                <p>{data.email}</p>
                                <p>{data.phoneno}</p>
                            </td>
                            <td>{data.status}</td>
                            <td>{data.address}</td>
                            <td><FontAwesomeIcon icon={faPen} className="icon"/><FontAwesomeIcon icon={faTrashCan} className="icon"/></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main;