//the UI for displaying the list of inventory items
import React, { Component } from 'react';
import Item from './Item';
// import { inflateRawSync } from 'zlib';

const serverURL = 'http://localhost:8080/';
const warehousesEP = 'warehouses/';

export default class InvList extends Component {

    //loop that goes through each item object in the inventoryData list
    //and passed the elements into relevant slots within the Item component
    componentDidMount() {
    //only fetches if there is an warehouseId, otherwise use the items passed through param
        if(this.props.warehouseId){
            fetch(`${serverURL}${warehousesEP}${this.props.warehouseId}`)
                .then(res=>{ 
                    if(res.status===200){
                        this.setState({fetched:true});
                    }else{
                        this.setState({fetched:false});
                    }
                    return res.json()})          // javascript ternary operator '<question> ? <item1>:<item2>' that sets state to empty array in 404 response
                .then(data=> this.setState({warehouseInv:(data.items? data.items:[])}))
                //ternary that sets state.address.street to unknown if data.address comes back undefined(in a 404 response for example),address:(data.address? data.address:{street:'Unknown Warehouse', city:""}),name:(data.name? data.name:"")}))
                .catch(err=>console.log(err))
        }
    }
    
    //resets state when navigating from unknown warehouse invlist to inventory
    static getDerivedStateFromProps(props,state){
        if(props.all){
            return {
                warehouseInv:[],
                address:{},
                name:"",
                fetched:null
            }
        }else{
            return state
        }
    }

    //the state tracks only warehouse specific inv that is fetched
    state={
        warehouseInv:[],
        //boolean that shows whether to make additional request 
        address:{},
        name:"",
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
    // and there was a successful fetch(status 200)
    if(paramWHid && this.state.fetched){
        //if the paramWHid and address exist, means we want to load from state instead of parent props
        loadInv= this.state.warehouseInv;
        title = `Inventory at ${this.state.name} (${this.state.address.street}, ${this.state.address.city})`
    }

    //loop that goes through each item object in the inventoryData list
    //and passed the elements into relevant slots within the Item component
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
    
    if(this.state.fetched===false){
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
