//the UI for displaying the list of inventory items
import React, { Component } from 'react';

export default class InvList extends Component {
    render() {
        return (
            <div className="InvListParent">
                <div className="InvListParent__title">
                    <h1>Inventory</h1>
                    <span>Filter</span>
                    {/* ideally should have filter functionality */}
                </div>
                <table>
                    <tr className="HeaderRow">
                        <th>Item</th>
                        <th>Last Ordered</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <span>Product Name</span>
                            <span></span>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <img src="./Assets/Icons/Row Menu.svg" />
                        </td>
                    </tr>    
                </table>
            </div>
        )
    }
}



// This component will need state.
// state setting for Inventory List data - will be moved to the main parent component
// state = {
//     invList: data,
// }

// Be sure to create an individual item component.

// This component will also be used to display the inventory for a single warehouse.Your fetch to the API will differ depending on if there is a warehouse_id prop or not. Be sure to collaborate with the person who has the ticket “Front - End: Warehouse Inventory List“.

// Note: If the inventory endpoint on the back - end is not complete, use fake data until it is ready to be hooked up.