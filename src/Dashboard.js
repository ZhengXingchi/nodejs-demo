import React from 'react'
import {Route,Link,Redirect,Switch} from 'react-router-dom'
import App from './App';
import {logout} from './Auth.redux'
import {connect} from 'react-redux'
function ErYing(props){
	console.log(props)
  return <h1>二营</h1>
}

function QiBingLian(){
  return <h1>骑兵连</h1>
}
@connect(
	state=>state.auth,
	{logout}
)
class Dashboard extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const redirectToLogin=<Redirect to='/login'></Redirect>
		const match=this.props.match
		const app=(
			<div>
			   {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
				<ul>
				 	<li>
				 		<Link to={`${match.url}/`} >一营</Link>
				 	</li>
				 	<li>
				 		<Link to={`${match.url}/erying`} >二营</Link>
				 	</li>
				 	<li>
				 		<Link to={`${match.url}/qibinglian`} >骑兵连</Link>
				 	</li>
				 </ul>
				 <Route path={`${match.url}/`} exact component={App}></Route>
				 <Route path={`${match.url}/erying`}  component={ErYing}></Route>
				 <Route path={`${match.url}/qibinglian`}   component={QiBingLian}></Route>
				 
			</div>
		)
		return (
            this.props.isAuth?app:redirectToLogin
			
          
		)
	}
}
export default Dashboard