import React from "react";
import Headtail from "./Headtail";
import './page1.css'
import Banner from "./Banner";
import Content from "./Content";
import Clock from "./Clock";
import Cards from "./Cards";

function Mainpage(){
    return(
        <div>
            <Headtail className="head" sentence="리액트를 사용해 메인페이지 만들기 과제"/>
            <Clock/>
            <Banner/>
            <Content/>
            <Cards/>
            <Headtail className="tail" sentence="인공지능소프트웨어 / 1학년 / 2401110246 / 김용건"/>
        </div>
    )
}

export default Mainpage