const express = require("express");

const app = express();


app.listen(3001, ()=>{
  console.log("listening on port 3001");
})

app.get("/", (req, res)=>{
  res.status(200).json({
    msg: "Welcome to the Moodle API"
  })
})