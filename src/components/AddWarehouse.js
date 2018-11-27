import React, { Component } from 'react'
import Close from './Image Components/Close'

export default class AddWarehouse extends Component {
	constructor() {
		super();
		this.addNewWarehouse = React.createRef();
	}

	// Function/Method that is called on submit of form
	submitWarehouse = (e) => {
		//prevent default behaviour of reload
		e.preventDefault();
		let data = []
		//looping through the first 9 elements in the <form> object and pushing the values into the above array
		for (let i = 0; i < 9; i++) {
			data.push(this.addNewWarehouse.current[i].value)
		}
		//creating a new object using the array which now contains the values from the form
		let newWarehouse = {
			warehouseName: data[0],
			street: data[1],
			city: data[2],
			country:data[3],
			zipcode: data[4],
			nameTitle: data[5] + ", Warehouse Manager",
			phone: data[6],
			email: data[7],
			invType: data[8]
		}
		// Calling the postWarehouse Function/Method that has been passed down as a prop from App.js
		this.props.postWarehouse(newWarehouse)
		// setting all values of form back to nothing
		for (let i = 0; i < 9; i++) {
			this.addNewWarehouse.current[i].value = ""
		}
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
								<input type="text" required></input>
						</label>
						<div className="add__warehouseDetails">
							<div className="add__address">
								<h4>Address</h4>
								<label>
									Street Number & Name
										<input type="text" required></input>
								</label>
								<label>
									City
										<input type="text" required></input>
								</label>
								<label>
									Country
										<select type="text">
											<option value="Australia">Australia</option>
											<option value="Canada">Canada</option>
											<option value="Mexico">Mexico</option>
											<option value="USA">USA</option>
										</select>
								</label>
								<label>
									Postal Code
										<input type="text" required></input>
								</label>
							</div>
							<div className="add__contactInfo">
								<h4>Contact Information</h4>
								<label>
									Warehouse Manager's Name
										<input type="text" required></input>
								</label>
								<label>
									Phone Number
										<input type="tel" pattern="[0-9]{10}" required></input>
								</label>
								<label>
									Email Address
										<input type="email" required></input>
								</label>
								<label>
									Inventory Type
										<select type="text">
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
