import React from "react";


function Card({ title, className, children }) {
    return (
        <div className={`card ${className}`}>
            {title && <h2>{title}</h2>}  {/* title이 있을 경우 h2 태그를 렌더링 */}
            {children}
        </div>
    );
}

export default Card;
