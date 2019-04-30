import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './Auth';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';

import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// import {counter,addGUN,removeGUN,addGUNAsync} from "./index.redux"
import {counter} from "./index.redux"
import {auth} from "./Auth.redux"
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'

const store=createStore(combineReducers({counter,auth}),compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
console.log(store.getState())
 
//使用react-redux钱的写法
// function render(){
// 	ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN} addGUNAsync={addGUNAsync}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render)
class Test extends React.Component{
	constructor(props){
		super(props)
	}
  render(){
  
  	 
    return(
    	<div>
           <h2>测试组件 {this.props.match.params.location}</h2>
    	</div>
    )
  }
}

 
	ReactDOM.render(
		(<Provider  store={store}>
			<BrowserRouter>
			  <div>
			        <Switch>
					   <Route path='/login' exact component={Auth}></Route>
					   <Route path='/dashboard' component={Dashboard}></Route>
					    <Redirect to="/dashboard"></Redirect>
						 
					 </Switch>
			     	 

					 
			         
			  </div>
			</BrowserRouter>
		   
		</Provider>), 
		document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
