import React from 'react'; 
  
class App extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { hello : "World!" }; 
    } 
  
    UNSAFE_componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "Gayathri!" }); 
    } 
  
    render() 
    { 
        return ( 
            <div> 
            <h1>Welcome to React, Hello{ this.state.hello }</h1> 
            <h2> 
             <button onClick={this.changeState.bind(this)}>Click Here!</button> 
            </h2> 
            </div>
        ); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    UNSAFE_componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
} 
  
export default App;