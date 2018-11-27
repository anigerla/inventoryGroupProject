// initialising required elements for the server function
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// importing data from other components
const warehouseData = require('./warehouseData');
// const inventoryData = require('./inventoryData');
const inventoryData = require('./inventoryData');

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
//----------------------------------------------------------------------------------------------------

app.get('/inventory', (req, res) => {
    res.json(inventoryData);
})

app.delete('/inventory/:id', (req, res) => {
    const itemId = req.params.id;
    const someItem = req.body;
    inventoryData.find((requestItem, index) => {
        if (requestItem.id === itemId) {
            console.log(inventoryData[index]);
            // res.json(foundItem);
        } else {
            res.json("Item not found");
        }
        
    })
})

// code to start the server
app.listen(8080, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("Chattanooga Choo Choo at 8080");
})