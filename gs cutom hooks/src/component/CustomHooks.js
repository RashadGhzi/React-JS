import { useState } from 'react'


function CustomHooks() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 2);
    }

    return { count, handleCount };
}

export default CustomHooks