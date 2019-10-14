const express = require('express');
const blogRoute = express.Router();

const Blog =  require('../models/blog');


blogRoute.get('/read', (req, res)=>{
    Blog.find({},( error, blogs)=> {
    if(error){
        console.log(error)
    } else{
        res.json(blogs)
    }
    });
});



blogRoute.post('/add', (req, res)=>{
    let blogData = req.body;
    let blog = new Blog(blogData);
    blog.save((error, blogAdded) =>{
        if(error){
            console.log('Can not creat blog')
        } else {
            res.json(blogAdded)
        }
    });
});

blogRoute.get('/delete/:id', (req, res) =>{
    Blog.findByIdAndRemove({_id: req.params.id}, (err, blog)=>{
        if(err){
            res.json(err)
        } else{
            res.json(' Successfully removed')
        }
    })
})


module.exports = blogRoute
