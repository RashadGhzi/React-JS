import React, { useState, useEffect } from 'react'

export default function UseEffectHooks() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const [count2, setCount2] = useState(100);
    const handleDecrement = () => {
        setCount2(count2 - 1);
    }

    // using useEffect. It call itself with every mount (componentDidMount), every update and every unmounting after render() method
    useEffect(() => {
        console.log('called useEffect');
    }, [count, count2]);

    return (
        <div>
            <h2 className="incre">{count}</h2>
            <button type="button" onClick={handleIncrement}>Increment</button>
            <h2 className="decre">{count2}</h2>
            <button type="button" disabled={false} onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
