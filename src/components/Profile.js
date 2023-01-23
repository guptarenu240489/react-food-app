import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log('   Child - 1. Constructor');
        // Best place to create state variables
        this.state = {
            count: 0,   // just like const [count] = userState(0);
            count2: 1
        }
    }
    componentDidMount() {
        console.log('   Child - 3.ComponentDidMount');
    }
    render(){
        console.log('   Child - 2.Render');
        return (
        <div>
            <h1>Profile Class Component</h1>
            <h2>Name: {this.props.name}</h2>
            <h2>Count: {this.state.count}</h2>
            <h2>Count2: {this.state.count2}</h2>
            {/*WE DONT DONT MUTATE STATE DIRECTLY, WE USE SETSTATE */ }
            {/* Now counr2 will remain same but state var count will update */}
            <button onClick={() => this.setState({count:1})}>Click</button>
        </div>
        )

    }
    
}
export default Profile;