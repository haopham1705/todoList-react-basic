import React, { useState } from 'react'

export default function ColorBox(props) {
    const [color, setCorlor] = useState('blue');
    return (
        <div>
            {color}
            <button onClick={() => setCorlor('black')}>Change to black</button>
            <button onClick={() => setCorlor('white')}>Change to White</button>
        </div>
    )
}
