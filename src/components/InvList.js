//the UI for displaying the list of inventory items
import React, { Component } from 'react';
import Item from './Item';
import { inflateRawSync } from 'zlib';

const serverURL = 'http://localhost:8080/';
const warehousesEP = 'warehouses/';

export default class InvList extends Component {

    componentDidMount(){
    //only fetches if there is an warehouseId, otherwise use the items passed through param
        if(this.props.warehouseId){
            fetch(`${serverURL}${warehousesEP}${this.props.warehouseId}`)
                .then(res=>{ 
                            if(res.status===200){
                                this.setState({fetched:true});
                            }else{
                                this.setState({fetched:'error'});
                            }
                            return res.json()})
                .then(data=>this.setState({warehouseInv:(data.items? data.items:[])
                                            ,address:(data.address? data.address:{street:'Unknown Warehouse',
                                                                                city:""})    
                                             }))
                .catch(err=>console.log(err));
        }
    }

    //the state tracks only warehouse specific inv that is fetched
    state={
        warehouseInv:[],
        //boolean that shows whether to make additional request 
        address:{},
        fetched:null
    }

    render() {  

    //these variables will be used when state is introduced and static data is changed to dynamic
    //please, do not remove    
    let loadInv = this.props.itemsArray;



    //add conditional render for warehouse inventory 
    let title="Inventory";
    //warehouseid, if defined is provided by props 
    let paramWHid = this.props.warehouseId;
    //this if statement will only run when a warehouseId is provided by App through props 
    if(paramWHid && this.state.fetched){
        //if the paramWHid and address exist, means we want to load from state instead of parent props
        loadInv= this.state.warehouseInv;
        title = `Inventory at ${this.state.address.street}, ${this.state.address.city}`

    }

    //loop that goes through each item object in the inventoryData list
    //and passed the elements into relevant slots within the Item component
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
                    key={loadInv[i].id}
                />
            itemList.push(oneItem);
        }
    
    if(this.state.fetched==='error'){
        itemList = (<tr>
                        <td className="error">
                            <h3>Warehouse does not exist</h3>
                        </td>
                    </tr>
                    )
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
