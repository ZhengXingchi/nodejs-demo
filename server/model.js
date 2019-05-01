const mongoose=require('mongoose')

//链接mongo 并且使用demo这个自建集合
const DB_URL='mongodb://localhost:27017/demo'

mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongoose已经连接成功')
})