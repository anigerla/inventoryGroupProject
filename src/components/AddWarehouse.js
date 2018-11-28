import React, { Component } from 'react'
import Close from './Image Components/Close'

export default class AddWarehouse extends Component {
	constructor() {
		super();
		this.addNewWarehouse = React.createRef();
	}

	// Function/Method that is called on submit of form
	submitWarehouse = (e) => {
		// prevent default behaviour of reload
		e.preventDefault();
		// creating a new object using the values from the form
		let newWarehouse = {
			warehouseName: e.target.warehouse.value,
			street: e.target.street.value,
			city: e.target.city.value,
			country: e.target.country.value,
			zipcode: e.target.zipcode.value,
			nameTitle: e.target.manager.value + ", Warehouse Manager",
			phone: e.target.phone.value,
			email: e.target.email.value,
			invType: e.target.inventory.value
		}
		// Calling the postWarehouse Function/Method that has been passed down as a prop from App.js
		this.props.postWarehouse(newWarehouse)
		// clearing the input fields of the form
		e.target.reset()
	}

  render() {
		let showPopup;
		if(this.props.show){
			showPopup = {display: "flex"}
		} else{
			showPopup = {display: "none"}
		}
    return (
    	<div className="warehouse__blur" style={showPopup}>
				<div className="warehouse__add">
					<h1>Add a new storage location</h1>
					<form onSubmit={this.submitWarehouse} ref={this.addNewWarehouse}>
						<label className="add__warehouseName">
								Warehouse Name
								<input type="text" name="warehouse" onChange={this.props.watch} value={this.props.warehouseInputs.warehouseName}></input>
						</label>
						<div className="add__warehouseDetails">
							<div className="add__address">
								<h4>Address</h4>
								<label>
									Street Number & Name
										<input type="text" name="street" onChange={this.props.watch} value={this.props.warehouseInputs.street}></input>
								</label>
								<label>
									City
										<input type="text" name="city" required></input>
								</label>
								<label>
									Country
										<select type="text" name="country">
											<option value="Australia">Australia</option>
											<option value="Canada">Canada</option>
											<option value="Mexico">Mexico</option>
											<option value="USA">USA</option>
										</select>
								</label>
								<label>
									Postal Code
										<input type="text" name="zipcode" required></input>
								</label>
							</div>
							<div className="add__contactInfo">
								<h4>Contact Information</h4>
								<label>
									Warehouse Manager's Name
										<input type="text" name="manager" required></input>
								</label>
								<label>
									Phone Number
										<input type="tel" name="phone" required></input>
								</label>
								<label>
									Email Address
										<input type="email" name="email" required></input>
								</label>
								<label>
									Inventory Type
										<select type="text" name="inventory">
										<option value="Automotive">Automotive</option>
										<option value="HeavyIndustry">Heavy Industry</option>
										<option value="Industrial">Industrial</option>
										</select>
								</label>
							</div>
						</div>
						<input id="addWarehouseBtn" type="submit" value="Save Location	" />
					</form>
					<div onClick={this.props.displayPopup} className="add__warehouse--close">
						<Close/>
						<p>CLOSE</p>
					</div>
				</div>
      </div>
    )
  }
}
