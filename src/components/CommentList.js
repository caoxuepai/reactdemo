import React from 'react';
class CommentList extends React.Component{
    render(){
        const { comments,commentName } = this.props;
        return(
            <div className="comment-list-component">
                <label>评论列表</label>
                <label>{commentName}</label>
                <ul className="list-group md-3">
                    {
                        comments.map((coment,index) =>
                            <li key={index} className="list-group-item">{coment}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

}
export default CommentList