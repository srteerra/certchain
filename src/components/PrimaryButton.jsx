import React from "react";

// Filled buttons

function PrimaryButton_lg_fill({text, event}) {
    return (
        <button
            className="px-12 py-4 text-lg bg-primary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function PrimaryButton_md_fill({text, event}) {
    return (
        <button
            className="px-10 py-2 text-md bg-primary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function PrimaryButton_sm_fill({text, event}) {
    return (
        <button
            className="px-8 py-2 text-sm bg-primary text-white rounded-full hover:opacity-90 transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

// Outline buttons

function PrimaryButton_lg_outline({text, event}) {
    return (
        <button
            className="px-12 py-4 text-lg bg-transparent border-2 text-dark rounded-full hover:bg-black hover:text-white transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function PrimaryButton_md_outline({text, event}) {
    return (
        <button
            className="px-10 py-2 text-md bg-transparent border-2 text-dark rounded-full hover:bg-black hover:text-white transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

function PrimaryButton_sm_outline({text, event}) {
    return (
        <button
            className="px-8 py-2 text-sm bg-transparent border-2 text-dark rounded-full hover:bg-black hover:text-white transition duration-200 ease-in-out"
            onClick={event}>{text}
        </button>
    )
}

export {
    PrimaryButton_lg_fill,
    PrimaryButton_md_fill,
    PrimaryButton_sm_fill,
    PrimaryButton_lg_outline,
    PrimaryButton_md_outline,
    PrimaryButton_sm_outline
};