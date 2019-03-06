// 函数式组件
const HeloWorld=(props)=>{
  const sayHi=(event) =>('Hello World')
  return(
    <div onClick={sayHi}>Hello World</div>
  )
}