import React from 'react';

import { findDomNode } from 'react-dom';

class FreeContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            inputValue:'',
            textareaValue:'',
            redioValue:'',
            coffee:[]

        }
    }
    // componentDidMount(){
    //     const myComp = this.refs.myComp;
    //     const dom = findDomNode(myComp)
    // }
    handleClick =() => {
        if(this.myTextInput !== null){
            this.myTextInput.focus()
        }
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }
    textareavalueChange = (e) => {
        this.setState({
            textareaValue:e.target.value,
        })
    }
    handleRadio = (e) => {
        this.setState({
            redioValue:e.target.value,
        })
    }
    checkedBoxChange = (e) => {
        const {checked,value} = e.target;
        let {coffee} = this.state;
        if(checked && coffee.indexOf(value) === -1){
            coffee.push(value)
        }else{
            coffee = coffee.filter(i => i !== value);
        }
        this.setState({
            coffee,
        })
    }
    render(){
        const{inputValue,textareaValue,redioValue,coffee} = this.state;
        return(
            <div>
                <input type="text" ref={(ref) => this.myTextInput = ref}/>
                <input  type="button" value="Focus the text input" onClick={this.handleClick}/>
                <div>
                    {/*<Comp ref="myComp" />*/}
                </div>
                <div>
                    <p><input value={inputValue} onChange={this.handleInputChange} type="text" /></p>
                    <p><textarea value={textareaValue} onChange={this.textareavalueChange} /></p>
                    <div>
                        <p>gender:</p>
                        <label>male:</label><input type="radio" value="male" checked={redioValue === 'male'} onChange={this.handleRadio}/>
                        <label>famale:</label><input type="radio" value="famale" checked={redioValue === 'famale'} onChange={this.handleRadio}/>
                    </div>

                </div>
                <div>
                    <p>请选择您喜欢的咖啡：</p>
                    <label>
                        <input type="checkbox" value='Cappuccino' checked={coffee.indexOf('Cappuccino') !== -1} onChange={this.checkedBoxChange}/>Cappuccino
                    </label><br/>
                    <label>
                        <input type="checkbox" value='CafeMocha' checked={coffee.indexOf('CafeMocha') !== -1} onChange={this.checkedBoxChange}/>CafeMocha
                    </label>
                </div>
            </div>
        )
    }
}
export default FreeContent