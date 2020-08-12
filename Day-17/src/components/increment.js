import React, { Component } from 'react'

class increment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    Increment(){
        // this.setState(
            // {
            //     count: this.state.count+1
            // }
            // ,
            // ()=>{
            //     console.log('call back value',this.state.count)
            // }
             this.setState( prevState=>({
                                count:prevState.count+1
                            })
        )}
    incrementfivr()
    {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    render() {
        return (
            <div>
                <div>Count--->{this.state.count}</div>
                <button onClick={()=>this.incrementfivr()}>INCREMENT</button>
            
            </div>
        )}
        }
export default increment
