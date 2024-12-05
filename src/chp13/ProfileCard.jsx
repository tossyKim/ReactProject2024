import React from "react";
import Card from "./Card";
import './styles.css'

function ProfileCard(){
    return(
        <Card className="profile-card" title = "Kathy Minn">
            <p>안녕하세요~ 김용건입니다.</p>
            <p>리액트로 카드형 템플릿을 작성중입니다.</p>
        </Card>
    )
}

export default ProfileCard