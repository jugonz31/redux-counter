import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const containerStyle = {
    display: 'flex'
}
const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}

const Counter = () => {
    const dispatcher = useDispatch()
    const counter = useSelector(state => state.number)
    
    return (
        <div className="App" >
            <header className="App-header">
                <h1>{counter}</h1>
                <div style={containerStyle}>
                    <button type="button" style={buttonStyle} onClick={() => { dispatcher({ type: 'MINUS_ONE' }); } }>-</button>
                    <button type="button" style={buttonStyle} onClick={() => { dispatcher({ type: 'ADD_ONE' }); } }>+</button>
                </div>
            </header>
        </div>
    );
}

export default Counter;