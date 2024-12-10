import React from 'react';
import './page1.css'; // 스타일을 외부 파일로 분리할 수 있습니다.

function Banner() {
    return (
        <div className="banner">
            <ul>
                <li className="left"><a href="#" className="nav-link">홈</a></li>
                <li className="center"><a href="#" className="nav-link">링크1</a></li>
                <li className="center"><a href="#" className="nav-link">링크2</a></li>
                <li className="center"><a href="#" className="nav-link">링크3</a></li>
                <li className="center"><a href="#" className="nav-link">링크4</a></li>
                <li className="center"><a href="#" className="nav-link">링크5</a></li>
                <li className="right"><a href="#" className="nav-link">로고</a></li>
            </ul>
        </div>
    );
}

export default Banner;
