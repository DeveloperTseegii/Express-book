const express = require("express");
const app = express();
app.use(express.static("public"));
const cors = require("cors")
app.use(express.json());
const apiRoutes = require('./routes/api');

app.use(cors());
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-headers",
    "ORigin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.use('/api', apiRoutes);
app.listen(3002);
