require('dotenv').config();

const express = require('express'); 
const app =express();
const mongoose = require("mongoose");
const methodOverride = require('method-override');

// Global configuration
const port = 3000; 
const  Cake = require('./models/cake.js');


app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
  })
  
  app.use(express.urlencoded({extended:false}))
  app.use(methodOverride("_method"));         // override for put and delete requests from forms

  app.set('view engine', 'jsx');
    app.engine('jsx', require('express-react-views').createEngine());
    mongoose.set('strictQuery', true);
  
  
    // Setting up Mongoose
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  
  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
  })
  mongoose.set('strictQuery', true);
   //Index(shows all records) 
   app.get("/",(req, res) =>{
    res.render("Home");
  });
  
  // app.get('/', function(req, res) {
  //     res.send('<h1>Welcome to the Cake Shop App!</h1>');
  //   });
     app.get('/cake', (req, res)=> {
      Cake.find({},(error,allCake)=>{
  
      res.render('Index',{cake:allCake});
    });
  });
  
    //New-get a form to create a new cake
  
  app.get('/cake/new', (req,res) =>{
      res.render('New')
  });
  //Delete  a cake by id
  app.delete('/cake/:id', (req, res)=>{
    //res.send('deleting...');
    Cake.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/cake');//redirect back to cake index
  });
  });
  
  //Update
  
  app.put("/cake/:id", (req, res) => {
    console.log(req.body.remaining);

    if (req.body.remaining === "BUY") {
      console.log("remaining is buy")
       Cake.findByIdAndUpdate(req.params.id, { $inc: { "remaining": -1 } }, (err, cake) => {
          res.redirect(`/cake/${req.params.id}`); // redirecting to the Show page
       })
    } else {
       Cake.findByIdAndUpdate(req.params.id, req.body, (err, cake) => {
          res.redirect(`/cake/${req.params.id}`); // redirecting to the Show page
       })
    }
 })
 
  
  //Create-send the filled form to db and create a new cake
  app.post('/cake', (req,res) => {
    
          Cake.create(req.body, (error, createdCake) => {
          //  console.log(createdPokemon )
         res.redirect('/cake');
      })
      
  })
  //Edit-get the form to update cake
  app.get('/cake/:id/edit', (req, res)=>{
    Cake.findById(req.params.id, (err, foundCake)=>{ //find the cake
      if(!err){
        res.render(
          'Edit',
        {
          cake: foundCake //pass in the found cake so we can prefill the form
        }
      );
    } else {
      res.send({ msg: err.message })
    }
  });
  });
  
  
  
  //Show route- show me a particular cake
  app.get('/cake/:id', (req, res) => {
      Cake.findById(req.params.id,(err,foundCake)=>{
        console.log(foundCake)
          res.render('Show', { //second param must be an object
          cake:foundCake,}); //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
        });
    })
  
  
    app.listen(port,() => {
      console.log('listening on port' , port);
  });
  
  
  
  
  
  
  
  