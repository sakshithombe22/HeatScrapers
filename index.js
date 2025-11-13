const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
PORT=3000

require("dotenv").config();

app.set("view engine" , "ejs");

app.use(express.static("public"));
app.use(expressLayouts);

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/" , (req,res)=>{
  res.send("Server working well...");
});

app.get("/home" , (req,res)=>{
  res.render("home" , {name : "Mrunalini"});
});

app.post("/home/search" , (req,res)=>{
  let {searchedPlace} = req.body;
  res.send(searchedPlace);
});

app.get("/home/compareCities",(req,res)=>{
  res.render("compareCities");
});
app.get("/home/similarProgs",(req,res)=>{
  res.render("similarProgs");
});
app.get("/home/timeLine",(req,res)=>{
  res.render("timeLine");
});
app.get("/home/viewHeatMap",(req,res)=>{
  res.render("viewHeatMap");
});

app.get("/about",(req,res)=>{
  res.render("about");
});

app.listen(PORT , ()=>{
  console.log(`server active at http://localhost:${PORT}`)
})