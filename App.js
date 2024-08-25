import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
    return (
        <div className="App" style={{ background: 'blue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Calculator />
        </div>
    );
}

export default App;
