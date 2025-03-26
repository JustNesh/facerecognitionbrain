import React from "react";

export default function Rank({user}) {
    return (
        <div>
            <div className="white f3 center">
                {`${user.name}, your current entry count is...`}
            </div>
            <div className="white f1 center">
                {user.entries}
            </div>
        </div>
    )
}