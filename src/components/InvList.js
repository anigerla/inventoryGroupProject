//the UI for displaying the list of inventory items
import React, { Component } from 'react';
import Item from './Item';


export default class InvList extends Component {

    // itemsArray = [
    //     {
    //         id: "B0",
    //         productName: "Blob",
    //         productdescr: "It's a blob",
    //         lastOrder: "05/24/2018",
    //         location: "Thunder Bay",
    //         quantity: 1,
    //         status: "In Stock",
    //         warehouseId: "A4"
    //     },

    //     {
    //         "id": "B1",
    //         "productName": "The Mountain Three Wolf Moon Short Sleeve Tee",
    //         "productdescr": "It's a t-shirt",
    //         "lastOrder": "05/24/2018",
    //         "location": "Thunder Bay",
    //         "quantity": "537",
    //         "status": "In Stock",
    //         "warehouseId": "A1"
    //     },
    // ]

    render() {

        let loadInv = [
            {
                id: "B0",
                productName: "Blob",
                productdescr: "It's a blob",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 1,
                status: "In Stock",
                warehouseId: "A4"
            },

            {
                id: "B1",
                productName: "The Mountain Three Wolf Moon Short Sleeve Tee",
                productdescr: "It's a t-shirt",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 537,
                status: "In Stock",
                warehouseId: "A1"
            },

            {
                id: "B2",
                productName: "Hutzler 571 Banana Slicer",
                productdescr: "It's a banana slicer",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 9,
                status: "In Stock",
                warehouseId: "A3"
            },

            {
                id: "B3",
                productName: "BIC Cristal For Her Ball Pen",
                productdescr: "It's a pineapple pen",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 10000,
                status: "In Stock",
                warehouseId: "A2"
            },

            {
                id: "B4",
                productName: "Uranium Ore",
                productdescr: "It's nuclear",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 0.5,
                status: "In Stock",
                warehouseId: "A4"
            },

            {
                id: "B5",
                productName: "How to Avoid Huge Ships",
                productdescr: "It's a book",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 20,
                status: "In Stock",
                warehouseId: "A2"
            },

            {
                id: "B6",
                productName: "Looking For-Best of David Hasselhoff",
                productdescr: "It's a music CD",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 56,
                status: "In Stock",
                warehouseId: "A3"
            },

            {
                id: "B7",
                productName: "The 2009-2014 Outlook for Wood Toilet Seats in Greater China",
                productdescr: "It's a map",
                lastOrder: "05/24/2018",
                location: "Thunder Bay",
                quantity: 34,
                status: "In Stock",
                warehouseId: "A1"
            }
    ]    

    //these variables will be used when state is introduced and static data is changed to dynamic
    //please, do not remove    
        // let loadInv = this.props.itemsArray;
        // let loadInv = itemsArray;

    //loop that goes through each item object in the inventoryData list
    //and passed the elements into relevant slots within the Item component

    //add conditional render for warehouse inventory 
    let title="Inventory"
    let paramWHid = this.props.match.params.warehouseId;
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
                <Item id = {loadInv[i].id}  
                    prodName={loadInv[i].productName}
                    prodDescr={loadInv[i].productdescr}
                    lastOrder={loadInv[i].lastOrder}
                    location={loadInv[i].location}
                    quantity={loadInv[i].quantity}
                    status={loadInv[i].status}
                    id={loadInv[i].id}
                />
            itemList.push(oneItem);
        }


        return (
            <div className="InvListParent">
                <div className="InvListParent__title">
                    <h1>{title}</h1>
                    <span>Filter</span>
                    {/* ideally should have filter functionality */}
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

//Please, do not remove
//The comments for a ticket that need to be introduced to the code at a later stage:
// This component will need state.
// state setting for Inventory List data - will be moved to the main parent component
// state = {
//     invList: data,
// }

// This component will also be used to display the inventory for a single warehouse.Your fetch to the API will differ depending on if there is a warehouse_id prop or not. Be sure to collaborate with the person who has the ticket “Front - End: Warehouse Inventory List“.
