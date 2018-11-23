import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <tr className="ItemRow">
                <td>
                    <span>{this.props.productName}}</span>
                    <span>{this.props.productdescr}</span>
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