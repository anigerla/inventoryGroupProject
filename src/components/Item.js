import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Item extends Component {
    
    render() {

        return (
            <tr className="ItemRow">
                <td>
                    <Link to={`/inventory/${this.props.id}`}> 
                        <span className="prodName">{this.props.prodName}</span>
                    </Link>
                    <span>{this.props.prodDescr}</span>
                </td>
                <td>{this.props.lastOrder}</td>
                <td>{this.props.location}</td>
                <td>{this.props.quantity}</td>
                <td>{this.props.status}</td>
                <td>
                    <div className="dropdownParent">
                        <img src="./Assets/Icons/Row Menu.svg" alt="" />
                        <div className="dropdownChild">
                            <div className="dropdownChild--container">
                                <div>
                                    <Link to={`/inventory/${this.props.id}`} className="itemLink">
                                        <span>View Product</span>
                                    </Link>
                                </div>
                                <div>
                                    <span>Replenish Stock</span>
                                </div>
                                <div >      
                                    <span onClick={() => this.props.removeItem(this.props.id)}>Remove</span>
                                </div>      
                            </div>
                        </div>
                    </div>
                </td>
            </tr> 
    )}
}

