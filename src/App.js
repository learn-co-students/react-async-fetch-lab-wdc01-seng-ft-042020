// create your App component here
import React from "react"

export default class App extends React.Component {

    state = {
        spacePeople: []
    }

componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(({people}) => {
        this.setState({
            spacePeople: people
        })
    })
}
    
    render() {
        return (
<div>
    {this.state.spacePeople.map(peps => {return peps.name})}
</div>
        )
    }
}