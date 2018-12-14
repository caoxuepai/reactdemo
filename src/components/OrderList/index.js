import React from 'react';
import  OrderItem from '../OrderItem'

class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.data.map((item,index) => {
                        return <OrderItem data={item} key={item.id} onSubmit={this.handleSubmit}/>
                    })
                }
            </div>
        )
    }
    handleSubmit= (id,comment,stars) => {
        const newData = this.state.data.map(item =>{
            return item.id === id ?
                {
                    ...item,comment,stars,ifComented:true
                }:item
        });
        this.setState({
            data:newData
        })
    }
    componentDidMount() {
        fetch('/mock/orderList.json').then(res => {
            if(res.ok){
                res.json().then(data => {
                    this.setState({
                        data
                    })
                })
            }
        })
    }
}
export default OrderList;