import React, { Component } from 'react'

export default class InventoryDetails extends Component {
  render() {

   let {id}= this.props.match.params;
   //it'll receive a list of items and find the correct one to display 

   //items provided by props in sprint2
   let items = [{
      "id": "B4",
      "productName": "Uranium Ore",
      "productdescr": "It's nuclear",
      "lastOrder": "05/24/2018",
      "location": "Thunder Bay",
      "quantity": "0.5",
      "status": "In Stock",
      "orderedBy": "Mark Saunders",
      "referenceNumber": "JK2020FD7811201",
      "productCategory":"Industrial, Automotive, Heavy Industry",
      "warehouseId": "A4",
      "description":"Here is a more detailed summary of the product name, it’s uses, industries"
                     +" and possible attributes that could be used to describe the product. "
  }]

  //search items to find correct one to display 
  let item = items.find(inv=>{return id===inv.id});
  
    return (
      <div className='InvDetailsParent'>
        <div className='detailCard'>
          <div className='title'>
            <h3 className='title__name'>Product Name Summary</h3>
            <button className='title__newOrderButton'> New Order </button>
          </div>
          <ul className='details'>
            <li><span>DESCRIPTION:</span> <div className='text'>{item.description.repeat(3)}</div> </li>
            <li><span>LAST ORDERED:</span> {item.lastOrder} </li>
            <li><span>ORDERED BY:</span> {item.orderedBy} </li>
            <li><span>REFERENCE NUMBER:</span> {item.referenceNumber} </li>
            <li><span>PRODUCT CATEGORY:</span> {item.productCategory} </li>
            <li><span>QUANTITY:</span> {item.quantity} </li>
            <li><span>LOCATION:</span> {item.location} </li>
            <li><span>STATUS:</span> {item.status} </li>
          </ul>
        </div>
      </div>
    )
  }
}
