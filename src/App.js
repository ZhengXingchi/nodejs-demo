import React from 'react'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      '一营老大':'张大喵',
      '骑兵连老大':'红色娘子军',
    }
  }
 changeLeader(){
   this.setState({
      '一营老大':'张大喵2号',
      '骑兵连老大':'红色娘子军2号',
   })
 }
  render(){
    const boss='李云龙'
    return(
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 老大={this.state.一营老大}></一营>
        <骑兵连 老大={this.state.骑兵连老大}></骑兵连>
        <button onClick={()=>this.changeLeader()}>领导更换</button>
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
    console.log("组件初始化")

  }

  componentWillMount(){
    console.log('组件马上就要加载了')
  }

  componentDidMount(){
     console.log('组件加载完毕')
  }
  componentWillReceiveProps(nextProps){
    console.log("组件要接受父组件的值了")
    console.log(this.props)
    console.log(nextProps)
  }
  shouldCompoinentUpdate(){
    console.log("判断是不是要更新组件")
    return true;//记得要返回true
  }
  componentWillUpdate(){
    console.log("马上就要更新组件了")
  }

  componentDidUpdate(){
    console.log("组件更新完毕")
  }

  componentWillUnmount(){
    console.log("组件卸载了")
  }

  addSoulder=()=>{
    console.log('ddd')
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
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