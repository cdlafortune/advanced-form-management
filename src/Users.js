import React, { useState } from "react";

export default function Users(props) {
    return (
        <div className="users-container">
            {props.users.map(el =>
                <div className="user">
                    <h2>{el.name}</h2>
                    <p>{el.email}</p>
                    <p>{el.password}</p>
                </div>
            )}
        </div>
    );


}