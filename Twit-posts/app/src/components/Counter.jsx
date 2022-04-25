import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);


function increment() {
    setCount(count + 1)
}

function decrement() {
    setCount(count - 1)
}

    return (
        <>
            <h1>{count}</h1>
            <button
                type='button'
                name='Like'
                onClick={increment}
            >increment</button>
            <button
                type='button'
                name='disLike'
                onClick={decrement}
            >decrement</button>
        </>
    )
}

export default Counter;
