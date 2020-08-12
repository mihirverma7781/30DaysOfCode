import  React  , {Component } from 'react'


// THIS IS A CLASS COMPONENT EXAMPLE

class Message extends Component{
    constructor(){
        super()
        this.state={message:'Hello Visitor'}
    
    }   
    Thanks(){
        this.setState(
            {
            message:'Thanks for Subscribing..'
        }
    )} 
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.Thanks()}>Subscribe</button>

            </div>


    )
        
    }

}
export default Message