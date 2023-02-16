import React from "react";

function PrimaryButton({text, event}) {
    return (
        <button className="px-5" onClick={event}>{text}</button>
    )
}

function PrimaryButton_outline({text, event}) {
    return (
        <button onClick={event}>{text}</button>
    )
}

export { PrimaryButton, PrimaryButton_outline };