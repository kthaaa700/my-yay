import React from "react";

const Profile = (props) => {
    return (
        <div style={{ marginLeft : "10px", height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1}}>
            <p> 이름 : {props.name} </p>
            <p> 나이 : {props.age} </p>
            <p> 주소 : {props.address} </p>
        </div>

    )
}

export default Profile;