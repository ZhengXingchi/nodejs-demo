import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';
 
import * as serviceWorker from './serviceWorker';
import  './config'
import reducers from './reducer'
// import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import  './redux.self.js'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Page from './redux.context.demo.js'
// import {counter,addGUN,removeGUN,addGUNAsync} from "./index.redux"

import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'

ReactDOM.render(<Page/>, document.getElementById('root'));
 
// const store=createStore(reducers,compose(
// 	applyMiddleware(thunk),
// 	window.devToolsExtension?window.devToolsExtension():f=>f
// ))

// function Boss(){
// 	return <h1>BOSS页面</h1>
// }
 
 
//使用react-redux前的写法
// function render(){
// 	ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} addGUNAsync={addGUNAsync}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render)
 

 
	// ReactDOM.render(
	// 	(<Provider  store={store}>
	// 		<BrowserRouter>
	// 		  <div>
			        
	// 		           <AuthRoute></AuthRoute>
	// 				   <Route path='/boss' exact component={Boss}></Route>
	// 				   <Route path='/login'  component={Login}></Route>
	// 				   <Route path='/register' component={Register}></Route>
					     
						 
					 
			     	 

					 
			         
	// 		  </div>
	// 		</BrowserRouter>
		   
	// 	</Provider>), 
	// 	document.getElementById('root')
	// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
