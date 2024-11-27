import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { RadioButtonUnchecked } from '@mui/icons-material';
import { useState } from 'react';
import { RadioButtonChecked } from '@mui/icons-material';

export const SingleChip = ({id,name,selectedGenres,setSelectedGenres}) => {
  
    const [selected,setSelected] = useState(false)

    const handleClick = ()=>
        {
            setSelected(!selected)
            if(selectedGenres.indexOf(id)==-1) 
                {
                    setSelectedGenres(prev=>[...prev,id])
                }
            else
            {
                setSelectedGenres(prev=>prev.filter(item=>item.id))
            }
        }

    return (
    <div>
      
      <Chip label={name} icon={!selected?<RadioButtonUnchecked/>:<RadioButtonChecked/>} clickable onClick={handleClick} />
      
        
    </div>
  )
}

