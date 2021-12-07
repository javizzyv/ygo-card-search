import React from "react";

export default function FavoriteButton ({children, onClickHandler}) {
    return <button onClick={onClickHandler}>
        {children}
    </button>
}