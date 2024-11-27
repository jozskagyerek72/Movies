import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { img_300, imgUnavailable } from '../utils';
import { CardActionArea } from '@mui/material';
import { DetailModal } from './DetailModal';

export const SingleContent = ( { id,poster_path,title,name,media_type,type,release_date,first_air_date, vote_average } ) => {
  const [open, setOpen] = React.useState(false);

  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>setOpen(true)}>
      <CardMedia
        sx={{ height: 140 }}
        image={poster_path?img_300+poster_path:imgUnavailable}
        title={title||name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title||name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' , display:"flex", justifyContent:"space-between"}}>
          <span> {media_type} </span><span>{release_date||first_air_date}</span>
        </Typography>
        <span style={{position:'absolute',top:0,right:0,color:"white",border:"1px solid white",borderRadius:"50%",padding:"2px"
        }}>{vote_average.toFixed(1)}</span>
      </CardContent>
      
      </CardActionArea>
    </Card>
    {open&& <DetailModal open={open} setOpen={setOpen} id={id} media_type={media_type||type} />}
    </div>
  )
}

