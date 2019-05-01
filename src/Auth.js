import React from 'react'
import {login,getUserData} from './Auth.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.auth,
	{login,getUserData}
)
class Auth extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		 this.props.getUserData()
	}
	render(){
		return (
		  <div>
		  <h1>{this.props.name}</h1>
		  {this.props.isAuth?<Redirect to="/dashboard"></Redirect>:null}
          <h2>你还没有权限，需要登录操作</h2>
          <button onClick={this.props.login}>登录</button>
          </div>
		)
	}
}
export default Auth