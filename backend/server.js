const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// importing data from other components
const warehouseData = require('./warehouseData');
const inventoryData = require('./inventoryData');
const inventoryDetail = require('./inventoryDetails');

// displays html code on the page
app.use(express.static('public'));
//-----------------------------------------------------------------------------------------------------
// middleware functions start
//CORS code (reconciling port:3000 and port:8080 security issues)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

//Body Parser code starts
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
    //Body Parser code ends
 //middleware functions end
//-----------------------------------------------------------------------------------------------------


//get request to return all inventory items 
app.get('/inventory', (req,res)=>{
    res.json(inventoryData);
});

//get request for specific inventory item 
//incomplete
app.get('/inventory/:id',(req,res)=>{
    let details = inventoryDetail.find(item=>{ return item.id===req.params.id});
    if(details){
        res.json(details);
    }else{
        res.status(404).send('Inventory Item Could not be Found');
    }
});

app.post("/warehouses/", (req, res) => {
    // deconstruct elements from req.body
    const { warehouseName, street, city, country, zipcode, nameTitle, phone, email, invType } = req.body
    // create a new object to be push into dara array
    let newWarehouse = {
        warehouseId: "A" + (warehouseData.length + 1),
        warehouseName: warehouseName,
        address:
        {
            street: street,
            city: city,
            zipcode: zipcode,
            country: country
        },
        contact:
        {
            nameTitle: nameTitle,
            phone: phone,
            email: email
        },
        invType: invType
    }
    // push new object into data array
    warehouseData.push(newWarehouse)
    // send back new warehouse object
    res.json(newWarehouse)
});

// code to start the server
app.listen(8080, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("choo choo on 8080")
})