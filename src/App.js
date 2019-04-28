import React from 'react'
class App extends React.Component{
  render(){
    const boss='李云龙'
    return(
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 老大='张大喵'></一营>
        <骑兵连 老大='红色娘子军'></骑兵连>
      </div>
    )
  }
}

class  一营 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      solders:['虎子','马根深','柱子']
    }

  }

  addSoulder=()=>{
    console.log('ddd')
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }

  componentWillMount(){
    console.log('组件马上就要加载了')
  }

  componentDidMount(){
     console.log('组件加载完毕')
  }
  render(){ 
    console.log('组件正在加载')
    return(
      <div>
        <h2>一营，营长{this.props.老大}</h2>
        <button onClick={()=>this.addSoulder()}>新兵入伍</button>
        <ul>
         {this.state.solders.map(function(v){
            return <li key={v}>{v}</li>
         })}
         </ul>
      </div>
    )

    
  }
}

function 骑兵连(props){
  return <h2>骑兵连连长{props.老大},冲啊</h2>
}

export default App