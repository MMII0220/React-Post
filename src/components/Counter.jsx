import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increament() {
        setCount(count + 1);
    }
    
    function decreament() {
        setCount(count - 1);
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={increament}>Increase</button>
            <button onClick={decreament}>Decrease</button>
        </>
    );
}

export default Counter;

