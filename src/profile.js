import React from "react";

const Profile = (props) => {
    return (
    <React.Fragment>
        
        <p> 이름 : {props.name} </p>
        <p> 나이 : {props.age} </p>
        <p> 주소 : {props.address} </p>
    
    </React.Fragment>
    )
}

export default Profile;