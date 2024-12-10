import React from "react";


function Card({ title, className, children,subtitle,tail}) {
    return (
        <div className={`card ${className}`}>
            {<h1>{title}</h1>} {/* title이 있을 경우 h2 태그를 렌더링 */}
            {<h2>{subtitle}</h2>}
            {children}
            <p className="Warn">{tail}</p>
        </div>
    );
}

export default Card;
