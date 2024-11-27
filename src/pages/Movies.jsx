import React from 'react'
import {Content} from "../components/Content"
import { Genres } from '../components/Genres'
import { useState } from 'react'
const urlMovies=`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_KEY}`


export const Movies = () => {

  const [urlForGenres,setURlForGenres] = useState('')

  return (
    <div>
        <Genres type="movie" setURlForGenres={setURlForGenres}/>
        <Content url={urlMovies+"&with_genres="+urlForGenres} type="movie"/>
    </div>
  )
}

