import React, { Component } from 'react'


export default class GifSearch extends Component {

constructor() {
    super();
    this.state = {
        search: ''
    };
}

handleChange = event => {
    event.persist()
   this.setState((prevState =>({
       search: event.target.value
   })), ()=>console.log(this.state.search))
}

handleSubmit = e =>{
    e.preventDefault()
    this.props.onSubmit(this.state.search)
}
    render() {
        return( 
            <React.Fragment>
                <br></br>
               <form onSubmit={this.handleSubmit}>
                   <label>Search: 
                   <input onChange={this.handleChange} name='input1' type='text' value={this.state.search} placeholder='Search'/>
                   </label>
                   <button onSubmit={this.handleSubmit}>Submit</button>
               </form>
               <br></br>
            </React.Fragment>
        )
    }
}