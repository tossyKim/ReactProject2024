import React, {useState} from "react"

function useCounter(initialValue){
    const [count, setcount] = useState(initialValue);

    const increaseCount = () => {
      setcount((count) => count +1);
    }

    const decreaseCount = () => {
        setcount((count) => Math.max(count -1, 0));
    }

    return [count, increaseCount, decreaseCount]
}

export default useCounter;