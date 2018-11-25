import React, { Component } from 'react'

export default class InventoryDetails extends Component {
  render() {

   let item = {
      "id": "B4",
      "productName": "Uranium Ore",
      "productdescr": "It's nuclear",
      "lastOrder": "05/24/2018",
      "location": "Thunder Bay",
      "quantity": "0.5",
      "status": "In Stock",
      "warehouseId": "A4",
      "description":"Here is a more detailed summary of the product name, it’s uses, industries"
                     +"and possible attributes that could be used to describe the product."
  }

    return (
      <div className='InvDetailsParent'>
        <div className='detailCard'>
          <div className='title'>
            <h1 className='title__name'>Product Name Summary</h1>
            <button className='title__newOrderButton'> New Order </button>
          </div>
          <div className='details'>
            {this.props.match.params.id}
          </div>
        </div>
      </div>
    )
  }
}
