import React, { useState } from 'react';

const Home = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Click Component Value {count}</p>
            <button onClick={e => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default Home;