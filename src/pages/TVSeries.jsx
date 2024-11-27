import React from 'react'
import { Content } from '../components/Content'
import { Genres } from '../components/Genres'
const urlSeries=`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_KEY}`
import { useState } from 'react'

export const TVSeries = () => {
  
  const [urlForGenres,setURlForGenres] = useState('')
  
  return (
    <div>
      <Genres type="tv" setURlForGenres={setURlForGenres}/>
      <Content url={urlSeries+"&with_genres="+urlForGenres} type="tv"/>
    </div>
  )
}

