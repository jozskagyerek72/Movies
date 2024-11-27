import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getData } from '../utils';
import { InstallDesktopOutlined } from '@mui/icons-material';
import { CircularProgress, Stack } from '@mui/material';
import { SingleChip } from './SingleChip';
import { useState } from 'react';
import { useEffect } from 'react';



export const Genres = ({type, setURlForGenres}) => {
    const urlGenres=`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_KEY}`
    
    const [selectedGenres,setSelectedGenres] = useState([])

    useEffect(()=>{
      if(selectedGenres.length<1) setURlForGenres("")
        else setURlForGenres(selectedGenres.join(','))
    },[selectedGenres])

    console.log(selectedGenres);
    
    console.log(urlGenres);
    const {data,isError,isLoading,error} = useQuery({queryKey:["genres",urlGenres],queryFn:getData})
    if(isLoading) return <CircularProgress/>
    if(isError) return <div>Error: {error.message}</div>

    return (
    <div>
        <Stack direction="row" spacing={1} sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

      {data.genres.map(obj=><SingleChip key={obj.id} {...obj} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>)}
        </Stack>
    </div>
  )
}

