import React, { Component } from 'react';
import './App.css';
import Char from './Users/Char.js';
import Validation from './Users/Validation.js';

class App extends Component {
    state = {
        input: ''
    }

    inputChangeHandler = (event) => {
        this.setState({
            input: event.target.value,

        })
    }
    deleteHandler = (index) => {
        let splitText = this.state.input.split('');
        splitText.splice(index, 1);
        let joinText = splitText.join('');
        this.setState ({
            input: joinText
        });
    }
    render() {
        const charValue = this.state.input.split('').map((char, index) => {
            return <Char value={char}
                key={index}
                delete={() => this.deleteHandler(index)} />;
            
        });
        return (
            <div className="center">
                <input type='text'
                       onChange={this.inputChangeHandler}
                       value={this.state.input}
                />
                <p>{this.state.input}</p>

                <Validation inputLength={this.state.input.length} />
                {charValue}

            </div>
        );
        
        
        
    }
}

export default App;
