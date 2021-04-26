import React from "react";

const Thumbnail = (props) => {
    return (
        <div>
            <a href={props.link}>
                <img style={{ width: "200px", height: "150px" }} src={props.image}></img>
            </a>
            <p> 제목 : {props.title} </p>
            <p> 작가 : {props.author} </p>

        </div>
    )
}

export default Thumbnail;