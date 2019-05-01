const express=require('express')

const UserRoute=require('./user')
 
const app=express()
app.use('/user',UserRoute)


// app.get('/',function(req,res){
//   res.send('<h>111<h/>')
// })

app.listen(9000,function(){
	console.log("服务器运行在9000端口")
})