const express = require('express');
const api2 = express.Router();
const Product = require('../models/product');



//localhost:3000/api2/product/read
// api2.get('/read', (req, res)=>{
//     Product.find(function(err, products){
// if(err){
//     console.log(err);

// }else{
//     res.json(products);
// }
//     }).sort({productName: 1, updatedAt:1})
//     /* 1 is for ascending and -1 is for decending  */
// })

api2.get('/read', (req, res)=>{
    let options = { 
        page: req.query.pageIndex, 
        limit: req.query.limit,
        sort: { productName: 1 }
     }
    Product.paginate({}, options, function(err, products) {
        if(err){
            console.log(err);
        } else {
            res.json(products);
        }
    })
})



//localhost:3000/api2/product/add
api2.post('/add', (req, res) => {
    let productData = req.body
    let product  = new Product(productData);
    product.save((error, productAdded) =>{
        if (error){
            console.log(error)
        } else{
            res.status(200).send(productAdded)
        }
   
    
      });
  });


api2.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    product.findById(id, function (err, products){
        res.json(products);
    });

});





module.exports = api2



//GET http://localhost:3000/api2/product/read
//POST http://localhost:3000/api2/product/add
//PUT http://localhost:3000/api2/product/update
//DELETE http://localhost:3000/api2/product/delete
