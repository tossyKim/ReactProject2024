import React, {useState} from "react";

function ConfirmButton4(props) {
    const[isConfirmed, setIsConfirmed] = useState(false)

    function handleConfirm(){
        setIsConfirmed(prevstate => !prevstate);
    }

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            ConfirmButton4 {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton4