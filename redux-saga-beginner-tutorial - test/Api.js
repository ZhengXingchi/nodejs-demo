

function storeItem(item){
	 
	
	 
   sessionStorage.setItem('token',item.token)
     
   
     
   
    
}
function clearItem(key){
	 sessionStorage.removeItem(key)
}
function authorize(user,password){
	console.log('1111222')
 return new Promise((resolve, reject)=>{
   setTimeout(function(){
        console.log('执行完成');
        resolve('77777');
      }, 2000);
    })
}
 

const Api={
storeItem,
clearItem,
authorize
}

export default Api
