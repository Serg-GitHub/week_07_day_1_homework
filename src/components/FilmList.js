import React from 'react';
import Film from './Film';

const FilmList = ({film}) => {

    const filmNodes = film.map(film => {

    return (
      <Film name={film.name} key={film.id}>{film.url}</Film>
      
    );
  });

  return(
    
        
    <ul>
     
      {filmNodes}
     
    </ul>
    
  )

}

export default FilmList;