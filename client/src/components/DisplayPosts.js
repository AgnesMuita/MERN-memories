import React, {useState}from 'react';
import {Grid, CircularProgress} from "@material-ui/core";
import useStyles from "./styles";
import axios from 'axios';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';



function DisplayPosts({setCurrentId}){
  const classes = useStyles();
  const [postData, setPostData]= useState([]);

  axios.get("http://localhost:5000/posts")
  .then((res)=>{
    setPostData(res.data)
  })
  .catch(err=>{
    console.log(err) 
  })
  return (
      !postData.length ? <CircularProgress/>:(
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {postData.map((onepost,i)=>(
        <Grid key={i} item xs={12} sm={6}>
          <Card key={i} setCurrentId={setCurrentId} className={classes.card}>
          <CardMedia className={classes.media} image={onepost.image} title={onepost.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{onepost.creator}</Typography>
                <Typography variant="body2">{moment(onepost.createdAt).fromNow()}</Typography> 
                <Typography variant="body2">{onepost.country}</Typography> 
            </div>
            <div className={classes.overlay2}>
                <Button 
                  style={{color:'white'}}
                 size="small" 
                onClick={()=>setCurrentId(onepost._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}><Typography variant="h6" color="textSecondary">{onepost.tags.map((tag)=>`#${tag}`)}</Typography></div>
          <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>{onepost.description}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" onClick={()=>{}}>
                <ThumbUpAltIcon fontSize="small"/>
                Like{onepost.likeCount}
              </Button>
              <Button size="small" color="secondary" onClick={()=>{}}>
                <DeleteIcon fontSize="small"/>
                Delete{onepost.likeCount}
              </Button>
          </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid> 
  )
  )
}


export default DisplayPosts;