import React, { useState } from 'react'
import LiftingState from './component/LiftingState'
import Item from './component/Item'
export default function App() {
    const [point, setPoint] = useState(200);

    const clickHandle = () => {
        setPoint(point + 10);
    }

    return (
        <div>
            <LiftingState point={point} />
            <Item num={point}></Item>
            <button type="button" onClick={clickHandle} >button</button>
        </div>
    )
}
