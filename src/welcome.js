import React from 'react'
import NameCard from './components/NameCard';
//import LikesButton from './components/LikesButton'
//import DigitalClock from './components/DigitalClock'
import CommonBox from './components/CommonBox'
import CommentList from './components/CommentList'

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments:['this is my first reply']
        }
        this.addComment = this.addComment.bind(this)
    }
    addComment(comment){
        this.setState({
            comments:[...this.state.comments,comment]
        })
    }
    render(){
        const todoList = ['Learn React','Learn Redux'];
        const isLogin = true;
        const tags = ['美丽','大方'];
        const {comments} = this.state;
        const commentName = ''
        return(
            <div>
                <h1>Hello React</h1>
                <ul>
                    {
                        todoList.map((item,index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
                { isLogin ? <p>已经登录</p> : <p>未登录</p> }
                <NameCard name="viking" number={13048115242} isHuman tags={tags}/>
                {/*<LikesButton/>*/}
                {/*<DigitalClock/>*/}
                <CommentList comments={comments} commentName={commentName}/>
                <CommonBox commentsLength = {comments.length} onAddComment={this.addComment}/>
            </div>
        )
    }
}
export default Welcome