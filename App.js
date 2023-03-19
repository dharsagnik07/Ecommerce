const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const bodyparsar=require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/EcommerceCart3');

const hbs=require("hbs");
const fs=require("fs");
const app=express();
const port=80;






//Define Mongo  Schema
const contactSchema1 = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    Feedback: String
    
    
    
});

const contact1= mongoose.model('Ecommerce1', contactSchema1);




//Express Specific Stuff

const staticPath=path.join(__dirname,"/views")




// hbs Specific Stuff
app.set('view engine','hbs') //Set the temlate engine  as pug
app.use(express.static(staticPath));
app.use(express.urlencoded());



app.post('/contact',(req,res)=>{
    var myData=new contact1(req.body)
    myData.save().then(()=>{
        res.send("This Item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("This Item has not saved to the database")

    });
    
    // res.status(200).render('contact.pug');
})












//Endpoints

app.get('/',(req,res)=>{
    
    res.status(200).render('login');
})
app.get('/index',(req,res)=>{
    
    res.status(200).render('index');
})
app.post('/index',(req,res)=>{
    
    res.status(200).render('index');
})



app.get('/About',(req,res)=>{
    
    res.status(200).render('About');
})
app.get('/contact',(req,res)=>{
    
    res.status(200).render('contact');
})
app.get('/cart',(req,res)=>{
    
    res.status(200).render('cart');
})
app.get('/blog',(req,res)=>{
    
    res.status(200).render('blog');
})
app.get('/sproduct',(req,res)=>{
    
    res.status(200).render('sproduct');
})
app.get('/shop',(req,res)=>{
    
    res.status(200).render('shop');
})




//Start the server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)


})


