// import React from "react";
//
// class ConfirmButtonClass extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isClicked : false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick(){
//         this.setState((prevState)=>({
//             isClicked : !prevState.isClicked
//         }))
//     }
//
//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 {this.state.isClicked ? "true" : "false"}
//             </button>
//         )
//     }
// }
// export default ConfirmButtonClass

// import React from "react";
//
// class ConfirmButtonClass extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isClicked : false
//         }
//         // this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick = () => {
//         this.setState((prevState)=>({
//             isClicked : !prevState.isClicked
//         }))
//     }
//
//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 {this.state.isClicked ? "true" : "false"}
//             </button>
//         )
//     }
// }
// export default ConfirmButtonClass

import React,{useState} from "react";

function ConfirmButtonClass(props){
    const [clicked, setClicked] = useState (false)

    function handleClick(){
        setClicked(prevState => !prevState)
    }
    return(
            <button onClick={handleClick}>
                {clicked ? "true" : "false"}
            </button>
        )
}

export default ConfirmButtonClass