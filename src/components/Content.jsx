import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getData } from '../utils'
import CircularProgress from '@mui/material/CircularProgress';
import { SingleContent } from './SingleContent';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ContentPagination } from './ContentPagination';

export const Content = ({url,type}) => {
    

    const [page,setPage] = useState(1)
    const {isLoading,isError,error,data} = useQuery( { queryKey: ["trendings",url+"&page="+page] , queryFn: getData} )
  
    if ( isLoading ) { return <CircularProgress color='red'/> }
    if ( isError ) { return <div>Error:{error.message}</div> }

    console.log(data.results, data.total_pages);

    return (
    <div className='container'>
      {data.results.map(obj=>
        <SingleContent key={obj.id} {...obj} type={type} />
      )}
      <ContentPagination page={page} setPage={setPage} numberOfPage={data.total_pages} />
    </div>
  )
}

