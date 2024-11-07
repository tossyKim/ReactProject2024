import React, {useState, useEffect} from "react"
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props){
    const [isFull, setIsFull] = useState(false)
    const [count, increasecount, decreasecount] = useCounter(0)

    useEffect(() => {
        console.log("======================");
        console.log("useEffect 실행됨");
        console.log(`isFull : ${isFull}`);
    },[]);

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY)
        console.log(`current count value : ${count}`);
    });

    useEffect(() => {
        document.title = `${count}`;
    });

    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increasecount} disabled={isFull}>수용시설에 입장</button>
            <button onClick={decreasecount}>수용시설에서 퇴장.</button>
            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;