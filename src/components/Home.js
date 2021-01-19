import React, { Component } from 'react'
import blinders from './blinders.jpg'
import lost from './lost.jpg'
import mile from './mile.jpg'
import Schindler from './Schindler.jpg'
import shawshenk from './shawshenk.jpg'
import titanic from './titanic.jpg'
import zeg from './zeg.jpg'

import './Home.css'


const Img=(props)=>{
    return <img src={lst[props.num]} alt=" " className="pictures" ></img>
}

var lst=[blinders,lost,mile,Schindler,shawshenk,titanic,zeg]

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    

    Plus=()=>{
        if(this.state.count<6)
            this.setState({count:this.state.count+1})
        
        
    }

    Minus=()=>{
        if (this.state.count>0)
            this.setState({count:this.state.count-1})
        
    }


render(){
    return (
        <div>
        <div className="wrapper">
            <button className="left" onClick={this.Plus}>+</button>
            <Img num={this.state.count}/>
            <button className="right" onClick={this.Minus}>-</button>
        </div>

        </div>
    );
}
}

export default Home