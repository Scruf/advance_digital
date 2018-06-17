import React, {Component} from 'react'
import axios from 'axios'


export default class Column extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: "", 
    		height:"", 
    		mass: "", 
    		hair_color: "", 
    		skin_color: "", 
		}
	}
	componentDidMount(){
		axios.get(`https://swapi.co/api/people/${this.props.count}/`)
			.then(response=>this.setState({
				name:response.data.name,
				height:response.data.height,
				mass:response.data.mass,
				hair_color:response.data.hair_color,
				skin_color:response.data.skin_color,
			}))
	}
	render(){

		return (
			<div className="col-sm-6">
				Name: <b>{this.state.name }</b><br />
				Height: <b>{this.state.height}</b><br />
				Mass: <b>{this.state.mass}</b><br />
				Hair Color: <b>{this.state.hair_color}</b><br />
				Skin Color: <b>{this.state.skin_color}</b><br />
			</div>
		)
	}
}
