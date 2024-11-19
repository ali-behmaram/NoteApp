import React, { Component } from 'react'

export default class ColorBox extends Component {

    colorHandler(color){
        this.props.onColor(color)
    }

    render() {
        return (
            <div className='color-box'  style={{ backgroundColor: this.props.color }} onClick={this.colorHandler.bind(this, this.props.color)} >
                
            </div>
        )
    }
}
