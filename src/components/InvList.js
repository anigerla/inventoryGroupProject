//the UI for displaying the list of inventory items
import React, { Component } from 'react';
import Item from './Item';


export default class InvList extends Component {

    render() {  
  
    let loadInv = this.props.itemsArray;

    //loop that goes through each item object in the inventoryData list
    //and passed the elements into relevant slots within the Item component
    //add conditional render for warehouse inventory 
    let title="Inventory"
    let paramWHid = this.props.warehouseId;
    //this if statement will only run when a  
    if(paramWHid){
        //filter out non warehouse specific items
        loadInv= loadInv.filter(item=>{return item.warehouseId=== paramWHid})
        // this json load will be a get request sprint 2
        let WHjson= require('../warehouseData.json');
        let warehouse= WHjson.find(item=>{return item.warehouseId===paramWHid})
        title = `Inventory at ${warehouse.address.street}, ${warehouse.address.city}`

    }
        let itemList = [];
        for (let i=0; i < loadInv.length; i++) {
            let oneItem = 
                <Item removeItem={this.props.removeItem} id = {loadInv[i].id}  
                    prodName={loadInv[i].productName}
                    prodDescr={loadInv[i].productdescr}
                    lastOrder={loadInv[i].lastOrder}
                    location={loadInv[i].location}
                    quantity={loadInv[i].quantity}
                    status={loadInv[i].status}
                    key={loadInv[i].id}
                />
            itemList.push(oneItem);
        }

        return (
            <div className="InvListParent">
                <div className="InvListParent__title">
                    <h1>{title}</h1>
                    <span>Filter</span>
                </div>
                <table>
                    <thead>
                        <tr className="HeaderRow">
                            <th>Item</th>
                            <th>Last Ordered</th>
                            <th>Location</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList}
                    </tbody>
                </table>
            </div>
        )
    }
}

