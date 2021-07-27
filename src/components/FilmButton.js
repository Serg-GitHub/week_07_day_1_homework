import React from 'react';

const FilmButton = ({name, children,}) => {
    return (
        <li>
        <button href={children}>{name}</button>
        </li>
    )
}


export default FilmButton;
