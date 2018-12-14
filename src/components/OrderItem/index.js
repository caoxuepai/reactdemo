import React from 'react';
import './style.css';
class OrderItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editing:false,
            stars:0,
            comment:''
        }
    }
    render(){
        const {shop,product,price,picture,ifComented} = this.props.data;
        return(
            <div className="orderItem">
                <div className="orderItem_picContainer">
                    <img className="orderItem_pic" src={picture} alt=""/>
                </div>
                <div className="orderItem_content">
                    <div className="orderItem_product">{product}</div>
                    <div className="orderItem_shop">{shop}</div>
                    <div className="orderItem_detail">
                        <div className="orderItem_price">{price}</div>
                        <div>
                            {
                                ifComented ? (
                                    <button className="orderItem_btn orderItem_btn_gray">已评价</button>
                                ):(
                                    <button className="orderItem_btn orderItem_btn_red" onClick={this.handleOpenEditArea.bind(this)}>评价</button>
                                )
                            }
                        </div>
                    </div>
                </div>
                {this.state.editing ? this.renderEditArea() : null}
            </div>
        )
    }
    handleOpenEditArea(){
        this.setState({
            editing:true
        })
    }
    handleCommentChange(e){
        this.setState({
            comment:e.target.value
        })
    }
    handleClickStarts(start){
        this.setState({
            stars:start
        })
    }
    handleCancelComment(){
        this.setState({
            editing:false,
            comment:'',
            stars:0
        })
    }
    handleSubmitComment(){
        const {id} = this.props.data;
        const {stars,comment}= this.state;
        this.setState({
            editing:false
        })
        this.props.onSubmit(id,comment,stars)
    }
    renderEditArea(){
        return(
            <div className="orderItem_commentContainer">
                <textarea className="orderItem_comment" onChange={this.handleCommentChange.bind(this)} value={this.state.comment}></textarea>
                {this.renderStarts()}
                <button className="orderItem_btn_red" onClick={this.handleSubmitComment.bind(this)}>提交</button>
                <button className="orderItem_btn_gray" onClick={this.handleCancelComment.bind(this)}>取消</button>
            </div>
        )
    }
    renderStarts(){
        const {stars}  = this.state;
        return(
            <div>
                {
                    [1,2,3,4,5].map((item,index) => {
                        const lightClass = stars >= item ? "orderItem_stars_light":"";
                        return (
                            <span className={lightClass} key={index} onClick={this.handleClickStarts.bind(this,item)}>★</span>
                        )
                    })
                }
            </div>
        )
    }
}
export default OrderItem;