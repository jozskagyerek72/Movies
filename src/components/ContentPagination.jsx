import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react'


export const ContentPagination = ({ page, setPage, numberOfPage = 10 }) => {


  const handleChage = (event, p) => {
    console.log(p, " oldal");
    setPage(p)

  }

  return (
    
      <Stack spacing={2} >

        <Pagination count={numberOfPage} variant="outlined" color="secondary" page={page} onChange={handleChage} />

      </Stack>
   
  )
}

