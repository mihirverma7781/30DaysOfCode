import React, { Component } from "react";
import Childcomponent from "./Childcomponent";

class Parentcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.GreetParent = this.GreetParent.bind(this);
  }
  GreetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return <div>
        <Childcomponent greethandler={this.GreetParent}/>
    </div>;
  }
}

export default Parentcomponent;
