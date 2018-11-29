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
		
		// Calling the postWarehouse Function/Method that has been passed down as a prop from App.js
		this.props.postWarehouse(this.props.warehouseInputs)

		// clearing the input fields of the form
		this.props.reset();
	}

  render() {
		let showPopup;
		if(this.props.show){
			showPopup = {display: "flex"}
		} else{
			showPopup = {display: "none"}
		}
		let {warehouseName,street,city,zipcode,nameTitle,phone,email} = this.props.warehouseInputs
		let isEnabled;
	  if (warehouseName.trim() !== "" && street.trim() !== "" && city.trim() !== "" && zipcode.trim() !== "" && nameTitle.trim() !== "" && phone.trim() !== "" && email.trim() !== ""){
			isEnabled = false
		} else{
			isEnabled = true
		}
    return (
    	<div className="warehouse__blur" style={showPopup}>
				<div className="warehouse__add">
					<h1>Add a new storage location</h1>
					<form onSubmit={this.submitWarehouse} ref={this.addNewWarehouse}>
						<label className="add__warehouseName">
								Warehouse Name
								<input type="text" name="warehouseName" onChange={this.props.watch} value={this.props.warehouseInputs.warehouseName}></input>
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
										<input type="text" name="city" onChange={this.props.watch} value={this.props.warehouseInputs.city}></input>
								</label>
								<label>
									Country
										<select type="text" name="country" onChange={this.props.watch} value={this.props.warehouseInputs.country}>
											<option value="Australia">Australia</option>
											<option value="Canada">Canada</option>
											<option value="Mexico">Mexico</option>
											<option value="USA">USA</option>
										</select>
								</label>
								<label>
									Postal Code
										<input type="text" name="zipcode" onChange={this.props.watch} value={this.props.warehouseInputs.zipcode}></input>
								</label>
							</div>
							<div className="add__contactInfo">
								<h4>Contact Information</h4>
								<label>
									Warehouse Manager's Name
										<input type="text" name="nameTitle" onChange={this.props.watch} value={this.props.warehouseInputs.nameTitle}></input>
								</label>
								<label>
									Phone Number
										<input type="tel" name="phone" onChange={this.props.watch} value={this.props.warehouseInputs.phone}></input>
								</label>
								<label>
									Email Address
										<input type="email" name="email" onChange={this.props.watch} value={this.props.warehouseInputs.email}></input>
								</label>
								<label>
									Inventory Type
										<select type="text" name="invType" onChange={this.props.watch} value={this.props.warehouseInputs.invType}>
										<option value="Automotive">Automotive</option>
										<option value="HeavyIndustry">Heavy Industry</option>
										<option value="Industrial">Industrial</option>
										</select>
								</label>
							</div>
						</div>
					<input id="addWarehouseBtn" type="submit" value="Save Location" disabled={isEnabled} />
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
