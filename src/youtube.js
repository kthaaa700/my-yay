import React from "react";

const Youtube = (props) => {
    return (
       
            <div>
                <img style = {{ width : "100px", height : "100px" }}  src = {props.image}></img>
                <p> 제목 : {props.title} </p>
                <p> 바로가기 : <a href = {props.link}>CLICK</a> </p>
             </div>
    

        // 이미지, 유튜브 채널 이름, 유튜브 주소 링크
    )
}

export default Youtube;