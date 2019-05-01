import axios from 'axios'

const LOGIN="LOGIN"
const LOGOUT="LOGOUT"
const USER_DATA="USER_DATA"

const initialState={
  isAuth:false,
  name:'李云龙',
  age:10 
}
//reducer
export function auth(state=initialState,action){
  console.log(state,action)
  switch(action.type){
    case LOGIN:
      return {...state,isAuth:true}
    case LOGOUT:
      return {...state,isAuth:false}
    case  USER_DATA:
      return {...state,...action.payload} 
    default:
      return state
  }
}

//action_creator
export function login(){
	return {type:LOGIN}
}

export function logout(){
	return {type:LOGOUT}
}
export function getUserData(){
  return dispath=>{
    axios.get('/data').then(function(res){
      if(res.status===200){
         dispath(userData(res.data)) 
      }
     
    })
  }
}
 function userData(data){
  return {type:USER_DATA,payload:data}
}


 