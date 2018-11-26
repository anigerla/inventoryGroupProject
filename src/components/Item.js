import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
    render() {

        return (
            <tr className="ItemRow">
                <td>
                    <Link to={"/inventory/B4" }>
                        <span>{this.props.prodName}</span>
                    </Link>
                    <span>{this.props.prodDescr}</span>
                </td>
                <td>{this.props.lastOrder}</td>
                <td>{this.props.location}</td>
                <td>{this.props.quantity}</td>
                <td>{this.props.status}</td>
                <td>
                    <img src="./Assets/Icons/Row Menu.svg" alt="" />
                </td>
            </tr> 
    )}
}