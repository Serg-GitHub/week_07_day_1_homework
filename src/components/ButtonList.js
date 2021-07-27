import React from 'react';
import FilmButton from './FilmButton'
const ButtonList = ({FilmButton}) => {
    const FilmButtonNodes = FilmButton.map(FilmButton =>{
        return (
            <FilmButton name={FilmButton.name}key={FilmButton.id}>{FilmButton.url}</FilmButton>
        );
    });
    return (
        <ul>
      {FilmButtonNodes}
        </ul>
    )
}
export default ButtonList;