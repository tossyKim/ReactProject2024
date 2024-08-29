import React from "react";
import Book from "./Book.jsx";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={3030}/>
            <Book name="처음 만난 AWS" numOfPage={400}/>
            <Book name="처음 만난 리액트" numOfPage={500}/>
        </div>
    )
}

export default Library;