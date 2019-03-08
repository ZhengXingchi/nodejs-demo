// 函数式组件
const HeloWorld=(props)=>{
  const sayHi=(event) =>('Hello World')
  return(
    <div onClick={sayHi}>Hello World</div>
  )
}


import  React,{Component} from 'react'
export default (WrappedComponent,name)=>{
  class NewComponent extents Component{
    constructor(){
      super()
      this.state={data:null}
    }

    componentWillMount(){
      let data=localStorage.getItem(name)
      this.setState({data})
    }

    render(){
      return <WrappedComponent data={this.state.data}/>
    }
  }
  return NewComponent
}



class Index extends Component {
  static childContextTypes={
    themeColor:PropTypes.string
  } 

  getChildContext(){
    return{themeColor:this.state.themeColor}
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
    <div>
      <h2>This is header</h2>
      <Title />
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main</h2>
      <Content />
    </div>
    )
  }
}

class Title extends Component {
  render () {
    return (
      <h1>React.js 小书标题</h1>
    )
  }
}

class Content extends Component {
  render () {
    return (
    <div>
      <h2>React.js 小书内容</h2>
    </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)





class EventEmitter{
  constructor(){

  }

  on(eventName,fn){
    let fnList
  }
}


function createStore(state,stateChanger){
  const listeners=[]
  const subscribe=(listener)=>listeners.push(listener)
  const getState=()=>state
  const dispatch=(action)=>{
    stateChanger(state,action)
    listeners.forEach((listener)=>listener())
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}


function  create