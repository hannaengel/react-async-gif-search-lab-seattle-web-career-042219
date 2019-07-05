import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
    constructor() {
        super();
        this.state = {
            query: 'cat',
            gifs: []
        };
    }
    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q=' + this.state.query +'&api_key=dc6zaTOxFJmzC&rating=g')
            .then(res=>res.json())
            .then(data => {
            console.log(data.data.slice(0, 3))
            this.setState({gifs: data.data.slice(0, 3)})
        })
    }

    submitForm = search =>{
        fetch('http://api.giphy.com/v1/gifs/search?q=' + search +'&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res=>res.json())
        .then(data => {
        console.log(data.data.slice(0, 3))
        this.setState({gifs: data.data.slice(0, 3)})
    })
    }

    render(){
        return(
            <div>
                  <GifSearch onSubmit={this.submitForm}/>
                {this.state.gifs.map((gif, index) => {
                    return <GifList key={index} gif={gif}/>
                 })}
              
            </div>
    
        )
    }
}