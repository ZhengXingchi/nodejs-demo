const express=require('express')
const mongoose=require('mongoose')

const app=express()
//链接mongo 并且使用demo这个自建集合
const DB_URL='mongodb://localhost:27017/demo'

mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('111')
})
const User=mongoose.model('User',new mongoose.Schema({
  name:{type:String,require:true},	
  age:{type:Number,require:true}
}))

//mongode的增删改查
// User.create({
// 	name:'tom',
// 	age:17
// },function(err,doc){
//   if(!err){
//   	console.log(doc)
//   }else{
//   	console.log(err)
//   }
// })


// User.remove({age:17},function(err,doc){
//  console.log(doc)
// })

// User.update({name:'tom'},{$set:{age:26}},function(err,doc){
// 	console.log(doc)
// })

app.get('/',function(req,res){
  res.send('<h>111<h/>')
})
app.get('/data',function(req,res){
  // res.json({"name":"tom qqq","it":11})
  // User.find({},function(err,doc){
  // 	return res.json(doc)
  // })

    User.findOne({name:'tom'},function(err,doc){
  	return res.json(doc)
  })

})
app.listen(9000,function(){
	console.log("hello")
})