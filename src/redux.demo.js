export default function createStore(reducer){
  const listeners=[]
  let state
  function dispatch(action){
  	console.log(state)
  	state=reducer(state,action)
  	listeners.forEach(v=>v())
  }

  function subscribe(li){
  	listeners.push(li)
  }
  function getState(){
  	return state
  }
  dispatch({type:'@hahaha'})
  return{
  	dispatch,
  	subscribe,
  	getState
  }
}