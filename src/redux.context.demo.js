import React from 'react'
import {PropTypes} from 'prop-types'

function Sidebar(){
	return(
		<div>
		  <h1>侧边栏</h1>
		  <Navebar>侧边栏</Navebar>

		</div>
	)
}

class Navebar extends React.Component{
	constructor(props){
      super(props)
      
	}
	static contextTypes={
		user:PropTypes.string
	}
	render(){
		console.log(this.context)
		return(
		<div>
		  <h1>{this.context.user}导航栏111</h1>
		</div>
	)
	}
	
}

class Page extends React.Component{
	constructor(props){
      super(props)
      this.state={user:'haha'}
	}
	getChildContext(){
		return this.state
	}
	static childContextTypes={
		user:PropTypes.string
	}
	render(){
		const user='haha'
		return(
			<div>
				<h1>我是{this.state.user}</h1>
				<Sidebar></Sidebar>
			</div>
		)
	}
}

export default Page
