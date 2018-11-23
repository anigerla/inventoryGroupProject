//the UI for displaying the list of inventory items
import React, { Component } from 'react';
import Item from './Item';

export default class InvList extends Component {
    render() {

        // let loadVideos = this.props.videoArray;
        // let videoCards = []; //cards used to display video "CARDS"
        // for (let i = 1; i < loadVideos.length; i++) {
        //     let video = <Link key={i} to={`/videos/${loadVideos[i].id}`}>
        //         <VideoCard
        //             title={loadVideos[i].title}
        //             views={loadVideos[i].views}
        //             image={loadVideos[i].image}
        //         />
        //     </Link>
        //     videoCards.push(video);
        // }

        //loop that goes through each item object in the inventoryData list
        //and passed the elements into relevant slots within the Item component
        // let loadItem = this.props.itemsArray;
        // let itemCards = [];
        // for (let i = 1; i < loadItem.length; i++) {
        //     let singleItem = 
        //         <Item 
                    

        //         />
        // } 

        return (
            <div className="InvListParent">
                <div className="InvListParent__title">
                    <h1>Inventory</h1>
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
                        { Item }
                    </tbody>
                </table>
            </div>
        )
    }
}



// This component will need state.
// state setting for Inventory List data - will be moved to the main parent component
// state = {
//     invList: data,
// }

// Be sure to create an individual item component.

// This component will also be used to display the inventory for a single warehouse.Your fetch to the API will differ depending on if there is a warehouse_id prop or not. Be sure to collaborate with the person who has the ticket “Front - End: Warehouse Inventory List“.

// Note: If the inventory endpoint on the back - end is not complete, use fake data until it is ready to be hooked up.