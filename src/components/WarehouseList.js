import React, { Component } from 'react'
// import List1 from '../warehouseData.json'
import { Link } from 'react-router-dom';
import AddWarehouse from './AddWarehouse';
const serverURL = 'http://localhost:8080/';
const warehouseEP = 'warehouses/';

export default class WarehouseList extends Component {
	state = {
		showPopup: false,
		newWarehouse: {
			warehouseName: "",
			street: "",
			city: "",
			country: "",
			zipcode: "",
			nameTitle: "",
			phone: "",
			email: "",
			invType: ""
		},
		List1:[]
	}

	componentDidMount(){
		fetch(`${serverURL}${warehouseEP}`)
			.then(res=>res.json())
			.then(data=>this.setState({List1:data}))
			.catch(err=>console.log(err));
	}

	// watching inputs and updating state with every key pressed
	watchingFormInputs = (e) => {
		let newWarehouse = { ...this.state.newWarehouse, [e.target.name]: e.target.value}
		this.setState({
			newWarehouse
		})
	}
	// resetting state once form submitted
	resetNewWarehouse = () => {
		this.setState({
			newWarehouse: {
				warehouseName: "",
				street: "",
				city: "",
				country: "",
				zipcode: "",
				nameTitle: "",
				phone: "",
				email: "",
				invType: ""
			}
		})
	}

	// Function to show the AddWarehouse component
	displayPopup = () => {
		if(this.state.showPopup){
			this.setState({
				showPopup: false
			})
		} else{
			this.setState({
				showPopup: true
			})
		}
	}

  render() {
	  
	let {List1} = this.state;
    return (
			<div className="InvListParent">
				<div className="InvListParent__title">
					<h1>Locations</h1>
					<span>Filter</span>
				</div>
				{
					List1.map( (each, i) => {
						return <div className="warehouse__card" key={each.warehouseId} id={each.warehouseId}>
							<Link to={"/warehouses/" + each.warehouseId}>
								<h2 className="warehouse__name">Warehouse Number {i + 1}</h2>
							</Link>
							<div className="warehouse__details">
								<div className="warehouse__address">
									<p className="warehouse--black">ADDRESS</p>
									<p>{each.address.street}</p>
									<p>{each.address.city}</p>
									<p>{each.address.zipcode}</p>
								</div>
								<div className="contact">
									<p className="warehouse--black">CONTACT</p>
									<p>{each.contact.nameTitle}</p>
									<p>{each.contact.phone}</p>
									<p>{each.contact.email}</p>
								</div>
								<div className="warehouse__address">
									<p className="warehouse--black">INVENTORY TYPE:</p>
									<p>Industrial, Automotive, Heavy Industry</p>
								</div>
							</div>
						</div>
					})
				}
				<div onClick={this.displayPopup} className="warehouse__addBtn">
					<p>+</p>
				</div>
				<AddWarehouse show={this.state.showPopup} displayPopup={this.displayPopup} postWarehouse={this.props.postWarehouse} warehouseInputs={this.state.newWarehouse} watch={this.watchingFormInputs} reset={this.resetNewWarehouse}/>
      </div>
    )
  }
}
