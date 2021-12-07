import React, { MouseEventHandler } from "react";

interface Props {
    children: string,
    onClickHandler: MouseEventHandler
}

export default function FavoriteButton (props:Props) {
    const {children, onClickHandler} = props;

    return <button onClick={onClickHandler}>
        {children}
    </button>
}