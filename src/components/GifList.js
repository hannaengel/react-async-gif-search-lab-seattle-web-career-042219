import React, { Component } from 'react'
//import other files here

export default class GifList extends Component {

    render() {
        return( 
            <div>
                <li>
                    <img alt='pic' src={this.props.gif.images.original.url}/>
                </li>   
            </div>
        )
    }
}