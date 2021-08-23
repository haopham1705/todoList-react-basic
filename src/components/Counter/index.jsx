import React, { useState } from 'react'


export default function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x + 1)}>InCrease</button>
        </div>
    )
}
