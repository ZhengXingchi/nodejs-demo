const REGISTER_SUCCESS="REGISTER_SUCCESS"
const ERROR_MSG="ERROR_MSG"
const initState={
	isAuth:'',
	msg:'',
	user:'',
	pwd:'',
	type:''
}

export function user(state=initState,action){

}

function errorMsg(msg){
	return {type=ERROR_MSG,payload:msg}
}

export function register({user,pwd,repeatpwd,type}){
  if(!user||!pwd||!type){
  	return errorMsg('用户名密码必须输入')
  }
}






