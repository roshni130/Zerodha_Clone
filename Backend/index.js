require('dotenv').config();

const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {HoldingsModel}=require('./model/HoldingsModel');

const {PositionsModel}=require('./model/PositionsModel');
const {OrdersModel}=require('./model/OrdersModel');

const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app=express();

app.use(cors({origin:["https://zerodha-clone-co7p.onrender.com","https://zerodha-clone1.onrender.com"],credentials:true}));
app.use(bodyParser.json());



app.get("/allHoldings",async(req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async(req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder",async(req,res) => {
     let newOrder = new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
     });

     newOrder.save();

     res.send("Order Saved");
});


const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  
  app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).send('Error: ' + err.message);
    }
  });
  
  
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send('Invalid email');
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Invalid password');
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(400).send('Error: ' + err.message);
    }
  });
  
  
  const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
  };
  
  app.get('/dashboard', auth, (req, res) => {
    res.send('Welcome to the Dashboard');
  });
  
  

app.listen(PORT,()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB Connected!");
});