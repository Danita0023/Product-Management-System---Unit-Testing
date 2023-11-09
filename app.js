const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = 200;


/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/*Close Connect to Production MongoDB server before Test*/ 
/* 
mongoose.connect('mongodb+srv://danita:123123123@cluster0.zu9zyj5.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a basic route

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

*/

// Import and use the product routes
const productRoutes = require("./routes/product.route");


app.use("/api", productRoutes);


module.exports = app;