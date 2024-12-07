const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors middleware
require("dotenv").config(); // Load environment variables from .env
const UserModel = require("./models/Users");
const ProductModel = require("./models/Product");
const OrderModel = require("./models/Order");

const app = express();
const PORT = 5000;
const MONGODB_URI = "mongodb://localhost:27017/FahamStore";

app.use(express.json())
// CORS middleware
app.use(
  cors({
    origin: "http://localhost:5001", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
    credentials: true, // Allow sending cookies from frontend to backend
  })
);

// Connect to MongoDB
mongoose.connect(MONGODB_URI
  // , {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
// }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({email: email})
  .then(user => {
    if (user){
      if( user.password === password ){
          res.json({ success: "Success", email: user.email });
      }
      else {
        res.json('Incorrect Password')
      }
    }
    else{
      res.json(`No User Found For This Email: ${email}`)
    }
  })
});

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

app.post("/order", (req, res) => {
  const { userEmail, total, items } = req.body;
  // Create a new order document
  const newOrder = new OrderModel({
    userEmail,
    total,
    items,
    orderDate: new Date(),
  });

  newOrder
    .save()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error saving order" });
    });
});

app.get("/myorder", async (req, res) => {
  const { userEmail } = req.query;
  try {
    const myorder = await OrderModel.find({ userEmail:userEmail ? userEmail : '' });
    console.log('abc',myorder);
    res.json(myorder);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

// Routes
// app.use("/api/auth", require("./routes/auth"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
