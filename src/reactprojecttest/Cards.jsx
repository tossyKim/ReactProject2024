import React from "react";
import Card from "./Card";

function Cards(){
    return(
        <div className="cards">
            <Card className="card1" title="아르떼뮤지엄"subtitle="몰입형 미디어아트전시관" tail = "사람많음주의" children="
            제주 아르떼뮤지엄은 자연과 기술을 결합한 몰입형 미디어 아트를 선보이는 전시관으로, 다양한 감각적 체험을 제공하며 제주 애월에 위치하고 있습니다."/>
            <Card className="card2" title="용머리해안" subtitle="바닷속으로 들어가는 용의 형태를 한 바위" tail="비, 눈, 강풍 시 입장 불가" children="
            용머리해안은 제주도 서부에 위치한 독특한 자연 경관을 자랑하는 명소로, 용의 머리처럼 형성된 바위와 암석들로 이루어진 해안가입니다."/>
        </div>
    )
}
export default Cards