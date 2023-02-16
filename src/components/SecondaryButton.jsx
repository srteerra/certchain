import React from "react";

// Filled buttons

function SecondaryButton_lg_fill({text, event}) {
    return (
        <button
            className="px-12 py-4 text-lg bg-secondary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function SecondaryButton_md_fill({text, event}) {
    return (
        <button
            className="px-10 py-2 text-md bg-secondary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function SecondaryButton_sm_fill({text, event}) {
    return (
        <button
            className="px-8 py-2 text-sm bg-secondary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

// Outline buttons

function SecondaryButton_lg_outline({text, event}) {
    return (
        <button
            className="px-12 py-4 text-lg bg-transparent border-2 text-dark hover:bg-black hover:text-white transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function SecondaryButton_md_outline({text, event}) {
    return (
        <button
            className="px-10 py-2 text-md bg-transparent border-2 text-dark hover:bg-black hover:text-white transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function SecondaryButton_sm_outline({text, event}) {
    return (
        <button
            className="px-8 py-2 text-sm bg-transparent border-2 text-dark hover:bg-black hover:text-white transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

export {
    SecondaryButton_lg_fill,
    SecondaryButton_md_fill,
    SecondaryButton_sm_fill,
    SecondaryButton_lg_outline,
    SecondaryButton_md_outline,
    SecondaryButton_sm_outline
};