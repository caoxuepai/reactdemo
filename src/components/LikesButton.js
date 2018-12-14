import React from 'react'

class LikesButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            likes:0
        }
        //this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes(){
        this.setState({
            likes: ++ this.state.likes
        })
        console.log(this)
    }
    render() {
        return(
            <div className="likes-button-component">
                <button type="button" className="btn btn-outline-primary btn-lg" onClick={() => {this.increaseLikes() }}>
                    赞{this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButton