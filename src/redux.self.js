// import {createStore} from 'redux'
import createStore from './redux.demo.js'
const ADD_GUNN='加机关枪'
const DEL_GUNN='减机关枪'


function reducer(state=0,action){
	switch(action.type){
		case ADD_GUNN:
		  return state+1
		case DEL_GUNN:
		  return state-1
		default: 
		  return 10
	}
}

const store=createStore(reducer)

console.log(`一开始有机枪${store.getState()}`)

function listener(){
	const current=store.getState()
	console.log(`现在有机枪${current}`)
}
store.subscribe(listener)
store.dispatch({type:ADD_GUNN})
store.dispatch({type:ADD_GUNN})
store.dispatch({type:ADD_GUNN})
store.dispatch({type:DEL_GUNN})
 

