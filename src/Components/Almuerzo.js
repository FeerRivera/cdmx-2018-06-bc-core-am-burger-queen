import React, { Component } from 'react';

class Breakfast extends Component {
    constructor(prop) {
        super(prop)
        this.food = prop.food
        this.price = prop.price
        this.text=`${this.food} ${this.price}`
    }
    click=(text)=>{
        this.props.handleClick(this.text,this.food,this.price)
    }
    render() {
        return (
            <div className="card">
              <div
              onClick={()=>{this.click(this.text,this.food,this.price)}}
              className="Button"
              data-tag={this.text}
              data-value={this.price}
              >
                 {this.food} ${this.price}
              </div>
            </div>
        )
    }
}
export default Breakfast;
