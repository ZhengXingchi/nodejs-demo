import  React,{Comment} from  'react'
import  CommentInput from './CommentInput'
import  CommentInput from './CommentList'

class CommentApp extends Component{
  render(){
    return(
      <div>
        <CommentInput></CommentInput>
        <CommentList></CommentList>
      </div>
    )
  }

  export default CommentApp
}