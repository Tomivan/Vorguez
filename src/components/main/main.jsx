import React from "react";
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
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Main;