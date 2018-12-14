import React from 'react';
class CommonBox extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value:'',
            extra:66,
            userInput:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        console.log(event)
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
        this.props.onAddComment(this.state.value)
        event.preventDefault()
    }
    handleClick(params,e){
        console.log(params,e)
        // this.setState({
        //     extra:666
        // })
    }
    clearAndFocusInput(){
        this.setState({
            userInput:'',

        },() => {
            this.refs.theInput.focus()
        })
    }
    handleInput(e){
        this.setState({
            userInput:e.target.value
        })
    }
    detail(){
        this.props.history.push('/about')
    }
    render(){
        return(
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <p>{this.state.value}</p>
                    <label>留言内容</label>
                    <input type='text' className='form-control' placeholder='请输入内容' value={this.state.value} onChange={this.handleChange.bind(this)} />
                    <p onClick={this.handleClick.bind(this, 'extra',2)}>点击</p>
                    <div>
                        <div onClick={this.clearAndFocusInput.bind(this)}>Click to Focus and Reset</div>
                        <input ref="theInput" value={this.state.userInput} onChange={this.handleInput.bind(this)}/>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>留言</button>
                <p>已有{this.props.commentsLength}条评论</p>

            </form>
        )
    }
}
export default CommonBox