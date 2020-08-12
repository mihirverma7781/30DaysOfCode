import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
//    SHORT CIRCUIT METHOD
return this.state.isLoggedIn && <div>  Hello Mihir</div>
   
   
    // TERNARY CONDITIONALS
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Mihir</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // IF ELSE STATMENT
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //         <h2>Welcome Mihir</h2>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //         <h2>Welcome Guest</h2>
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //        <h3>Welcome Home</h3>
    //        <h3>Welcome Guest</h3>
    //     </div>
    // )
  }
}

export default UserGreeting;
