import React from 'react'
import {Button,List} from 'antd-mobile'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      '一营老大':'张大喵',
      '骑兵连老大':'红色娘子军',
    }
  }
  
  render(){
     const store =this.props.store
     const addGUN =this.props.addGUN
     const removeGUN =this.props.removeGUN
     const num=store.getState()
     return(
      <div>
       <h1>现在有机枪{num}把</h1>
       <button onClick={()=>store.dispatch(addGUN())}>增加机关枪</button>
       <button onClick={()=>store.dispatch(removeGUN())}>上交机关枪</button>
      </div>
     ) 
  }
}

 

export default App