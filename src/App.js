import React from 'react'
import {Button,List} from 'antd-mobile'
import {addGUN,removeGUN,addGUNAsync} from "./index.redux"
import {connect} from 'react-redux'

// const mapStateToProps=(state)=>{
//   return {num:state}
// }
// const actionCreater={addGUN,removeGUN,addGUNAsync}
// App=connect(mapStateToProps,actionCreater)(App)

@connect(
state=>({num:state.counter}),
{addGUN,removeGUN,addGUNAsync}
)
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      '一营老大':'张大喵',
      '骑兵连老大':'红色娘子军',
    }
  }
  
  render(){
     
     
     return(
      <div>
       <h1>现在有机枪{this.props.num}把</h1>
       <button onClick={this.props.addGUN}>增加机关枪</button>
       <button onClick={this.props.removeGUN}>上交机关枪</button>
       <button onClick={this.props.addGUNAsync}>异步增加机关枪</button>
      </div>
     ) 
  }
}



 

export default App