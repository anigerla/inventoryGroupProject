import React, {Component} from 'react';

const serverURL = 'http://localhost:8080/';
const inventoryEP = 'inventory/';
export default class InventoryDetails extends Component {

  componentDidMount(){
    let {id}=this.props
    fetch(`${serverURL}${inventoryEP}${id}`)
      .then(res=>res.json())
      .then(data =>{
        this.setState({detail:data})
      })
      .catch(err=>console.log(err));
  }

  state={
    //initialize state to null 
    detail:null
  }
  
  render() {

    //now receives the item specified in the URL passed down from App as a prop
  let {item}= this.props;
  let additional = this.state.detail;

  let productDetails;
  
  //checks that both the props and state details have been successfully received 
  if(item && additional){
    // merges the additional detail properties into the item object 
    item = Object.assign(item,additional);

  productDetails=(<ul className='details'>
                      <li><span>DESCRIPTION:</span> <div className='text'>{item.description}</div> </li>
                      <li><span>LAST ORDERED:</span> {item.lastOrder} </li>
                      <li><span>ORDERED BY:</span> {item.orderedBy} </li>
                      <li><span>REFERENCE NUMBER:</span> {item.referenceNumber} </li>
                      <li><span>PRODUCT CATEGORY:</span> {item.productCategory} </li>
                      <li><span>QUANTITY:</span> {item.quantity} </li>
                      <li><span>LOCATION:</span> {item.location} </li>
                      <li><span>STATUS:</span> {item.status} </li>
                  </ul>);
  }else{
    let placeholder = "loading...";
    productDetails=(<ul className='details'>
                      <li><span>DESCRIPTION:</span> <div className='text'>{placeholder}</div> </li>
                      <li><span>LAST ORDERED:</span> {placeholder} </li>
                      <li><span>ORDERED BY:</span> {placeholder} </li>
                      <li><span>REFERENCE NUMBER:</span> {placeholder} </li>
                      <li><span>PRODUCT CATEGORY:</span> {placeholder} </li>
                      <li><span>QUANTITY:</span> {placeholder} </li>
                      <li><span>LOCATION:</span> {placeholder} </li>
                      <li><span>STATUS:</span> {placeholder} </li>
                  </ul>);
  }
  

    return (
      <div className='InvDetailsParent'>
       <div className='detailCard'>
          <div className='title'>
            <h3 className='title__name'>Product Name Summary</h3>
            <button className='title__newOrderButton'> New Order </button>
          </div>
            {productDetails}
        </div>
      </div>
    )
  }
}
