import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    return (
      <div>
      
      <p className='Des'>{this.props.Des}</p>
      <h2 className='Price'>{this.props.content}</h2>
      <button className='btn' id='buy'>Add to cart</button>
      </div>
    )
  }
}
