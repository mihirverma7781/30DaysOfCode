import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    // this.ClickHandler = this.ClickHandler.bind(this)
        this.state = {
             message:'hello all'

        }
    }
    // ClickHandler(){
    //     this.setState({
    //         message:'i am ironman'
    //     })
    //     console.log(this)
    // }
    ClickHandler=()=>{
this.setState({
    message:'I am thanos'
})
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.ClickHandler}>CLICK</button>
            </div>
        )
    }
}

export default EventBind
