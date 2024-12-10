import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

        useEffect(() => {
        const clock = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(clock);
    }, []);

    // 시간을 시, 분, 초 형식으로 포맷
    const hours = time.getHours().toString();
    const minutes = time.getMinutes().toString();
    const seconds = time.getSeconds().toString();

    return (
        <div className="clock">
            <p>{`${hours}시 ${minutes}분 ${seconds}초 입니다.`}</p>
        </div>
    );
}

export default Clock;
