import React, { Component } from 'react'
import List1 from '../warehouseData.json'
import { Link } from 'react-router-dom';

export default class WarehouseList extends Component {
	

  render() {
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
				<div className="warehouse__add">
					<p>+</p>
				</div>
      </div>
    )
  }
}
