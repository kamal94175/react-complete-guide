import React, { Component } from 'react';
import './App.css';
import UserInput from './Users/UserInput.js';
import UserOutput from './Users/UserOutput.js';
class App extends Component {

    state = {
        userName: 'Kamal'
    }



    nameChangeHandler = (event) => {
        this.setState({
            userName: event.target.value,

        })
    }
    render() {
        const style = {
             border: '1px solid #eee',
             padding: '15px',
             width: '1000px',
             margin: '10px auto',
             height: 'auto',
             boxshadow: '2px 2px 3px #eee',
             fontfamily: 'inherit'
    }
        
        return (
            <div style={style} className="App">
                <h1>Hi! I am a React developer.</h1>

                <UserOutput Name={this.state.userName} />
                
                <UserOutput Name={this.state.userName}>Hello there!
                </UserOutput>
                <UserInput Name={this.state.userName} change={this.nameChangeHandler} />
                
            </div>
        );
    }
}

export default App;
