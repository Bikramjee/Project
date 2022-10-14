import React from 'react'

// class CountClass extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={name:"Node"};
//         this.name="React";
//     }
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//               <p>hello all {this.props.name}</p>
//              <p>My name is {this.state.name}</p>
//             </div>
//         )
//     }
// }
// export default CountClass 

class Count extends React.Component{
    constructor()
    {
        super();
        this.state={count:0, fname:"Subscribe Me",lname:"Subscribed successfully"};
    }
    onIncrement=()=>
    {
        this.setState({count:this.state.count +1,fname:this.state.lname});
        console.log("Hello All");
    }
    render()
    {
        return (
            <div>
                <p>You Subscribed  {this.state.count} Times.</p>
                <button onClick={this.onIncrement}>{this.state.fname}</button>
            </div>
        )
    }
}

export default Count;