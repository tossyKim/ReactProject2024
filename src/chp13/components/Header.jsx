import React from "react";
import './AirApp.css'

function Header(){
    return(
        <header>
            <div>
                <nav>
                    <a href="/public">홈</a>
                    <a href="/experiences">체험</a>
                    <a href="/online">온라인 체험</a>
                </nav>
            </div>
        </header>
    )
}
export default Header