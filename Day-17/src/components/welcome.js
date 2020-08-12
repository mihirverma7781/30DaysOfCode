import  React  , {Component } from 'react'


// THIS IS A CLASS COMPONENT EXAMPLE

class Welcome extends Component{

    render(){
        const{name,heroName}=this.props
    return <h1>Welcome {heroName} AKA {name} {this.props.children}</h1>
    }
}
export default Welcome