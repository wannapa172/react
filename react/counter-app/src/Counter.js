import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="counter">
        <p>{item.itemname}</p>
    
        <p>ราคา : {item.price} THB</p>
        <p>จำนวน : {item.value}</p>
        <button onClick={() => this.props.onDecrement(item)} className="btn btn-secondary">-</button>
        <button onClick={() => this.props.onIncrement(item)} className="btn btn-primary">+</button>
      </div>
    );
  }
}

export default Counter;