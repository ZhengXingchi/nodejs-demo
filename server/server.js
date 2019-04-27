const express=require('express')
var app=express()

app.get('/',function(req,res){
  res.send('<h>111<h/>')
})
app.get('/data',function(req,res){
  res.json({"name":"tom qqq","it":11})
})
app.listen(3000,function(){
	console.log("hello")
})