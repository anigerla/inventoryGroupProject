import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocationImg from './Image Components/LocationImg';
import InventoryImg from './Image Components/InventoryImg.js';
import UserImg from './Image Components/UserImg';

export default class Footer extends Component {

    render() {

        return (
            <footer className="footer">
                <Link to="/inventory">
                    <div className="sidebar__links" >
                        <InventoryImg />
                        <h3>Inventory</h3>
                    </div>
                </Link>
                <Link to="/warehouses">
                    <div className="sidebar__links">
                        <LocationImg />
                        <h3>Location</h3>
                    </div>
                </Link>
                <Link to="/">
                    <div className="sidebar__links">
                        <UserImg />
                        <h3>Users</h3>
                    </div>
                </Link>
            </footer>
        )
    }
}