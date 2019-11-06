import React, { useState , useEffect } from 'react';
import { useHttp } from '../hooks/http';

import Summary from './Summary';

const Character = props => {
 
  const [ isLoading , fetchedData ] = useHttp('https://swapi.co/api/people/' + props.selectedChar,[props.selectedChar]);
  let loadedCharacter = null ;
  if(fetchedData){
    loadedCharacter = {
      id: props.selectedChar,
      name: fetchedData.name,
      height: fetchedData.height,
      colors: {
        hair: fetchedData.hair_color,
        skin: fetchedData.skin_color
      },
      gender: fetchedData.gender,
      movieCount: fetchedData.films.length
    };
  }


  console.log('rendering..')

    //component will unmount effect
    useEffect(() => {
      return () => {
        console.log('componetn will unmount')
      }
    },[])

    console.log(loadedCharacter)
    console.log(isLoading)
    let content = <p>Loading Character...</p>;

    if ( !isLoading && loadedCharacter) {
      content = (
        <Summary
          name={loadedCharacter.name}
          gender={loadedCharacter.gender}
          height={loadedCharacter.height}
          hairColor={loadedCharacter.colors.hair}
          skinColor={loadedCharacter.colors.skin}
          movieCount={loadedCharacter.movieCount}
        />
      );
    } else if (!isLoading && !loadedCharacter) {
      content = <p>Failed to fetch character.</p>;
    }
    return content;
  
}

//it will handle rendering with props is changed or not 
export default React.memo(Character);
