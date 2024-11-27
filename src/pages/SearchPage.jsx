import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { getData } from '../utils';
import { useQuery } from '@tanstack/react-query';
import { Content } from '../components/Content';



export const SearchPage = () => {
  const  [tab,setTab] = useState("movie")
  const [searchText, setsearchtext] = useState("")
  const urlSearch = `https://api.themoviedb.org/3/search/${tab}?api_key=${import.meta.env.VITE_KEY}&include_adult=false&query=${searchText}&page=1`;
  //const {isLoading,isError,error,data} = useQuery( { queryKey: ["trendings",urlSearch] , queryFn: getData} )

  const handlechange = (e) =>
    {
      setTab(e.target.value)
      console.log(e.target.value);
      
    }

  const search = () =>
    {
      console.log(data);

      
    }

  return (
    <div style={{marginLeft:"auto",marginRight:"auto"}}>
         <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >

          <Stack spacing={2} direction="row" >
           <TextField id="outlined-basic" label="Search" variant="outlined" onChange={()=>console.log(event.target.value)
           }/>
           <Button variant="contained" onClick={search}><ManageSearchIcon/></Button>
          </Stack>
          <RadioGroup
            row
            defaultValue="movies"
            name="radio-buttons-group"
            onChange={()=>handlechange(event)}
            
          >
              <FormControlLabel  value="movies" control={<Radio />} label="Movies" />
              <FormControlLabel value="tv" control={<Radio />} label="Tv series" />
              
          </RadioGroup>


     
    
    </Box>
    <Content url={urlSearch/*+"&with_genres="+urlForGenres*/} type={tab}/>
    </div>
  )
}

