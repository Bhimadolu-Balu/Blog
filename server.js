const express = require("express");

const app = express();

app.listen(5000,()=>{
    console.log("server connected sucessfully");
});
app.get('/balu',(req,res)=>{
    res.send("bayamu bhakthi mukyam bigulu");
})
