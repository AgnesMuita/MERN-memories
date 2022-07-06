import React,{useState} from "react";
import {TextField, Button, Typography,Paper} from "@material-ui/core"
import useStyles from "./styles";
import FileBase from "react-file-base64";
import axios from 'axios';
import DisplayPosts from "./DisplayPosts";


const CreatePost = ({addPost, currentId, setCurrentId})=>{
  const [travelInfo, setTravelInfo] = useState({creator:"",title:"",description:"",country:"",tags:[], image:""})

  const classes = useStyles();
  const clear =()=>{}

  const handleSubmit=(e)=>{
    addPost();
    const data = {creator:travelInfo.creator, title:travelInfo.title, description:travelInfo.description, country:travelInfo.country, tags:travelInfo.tags, image:travelInfo.image}
    if(currentId){
      axios.patch(`http://localhost:5000/posts${currentId}`, data)
      .then(res=>{  
        setTravelInfo(res.data)
      })
    }
    axios.post('http://localhost:5000/posts',data)
    .then(res=>{
      console.log(res)
      setTravelInfo(res.data)
      alert("created successfully")
    })
    .catch(err=>{
      console.log(err)
    })
    e.preventDefault();
  };
    if(!travelInfo) return "No post"
    return(
      <Paper className = {classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={e=>{handleSubmit(e)}}> 
          <Typography variant="h6">Create Your Travel Memory</Typography> 
          <TextField className={classes.textField} name="description" label="Share your Experience" focused fullWidth
          onChange={(event)=>setTravelInfo({...travelInfo,description:event.target.value})}/>
          <TextField name="title" label="Experience in One Word" 
          onChange={(event)=>setTravelInfo({...travelInfo,title:event.target.value})}/>
          <TextField name="country" label="Country"
          onChange={(event)=>setTravelInfo({...travelInfo,country:event.target.value})}/>
          <TextField name="creator" label="Creator"
          onChange={(event)=>setTravelInfo({...travelInfo,creator:event.target.value})}/>
          <TextField name="tags" label="Tags"
          onChange={(event)=>setTravelInfo({...travelInfo, tags:event.target.value})}/>

          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64})=>setTravelInfo({...travelInfo, image:base64})}/>
          </div>
          <Button className={classes.buttonSubmit} variant="contained"color="secondary" size="large" type="submit">Submit</Button>
          <br/>
          <Button className={classes.buttonSubmit} variant="contained"color="primary" size="large" onClick={clear}>Clear</Button>
        </form>
        <div>
        <DisplayPosts postData={travelInfo}  setCurrentId={setCurrentId}/> 
        </div>
      </Paper>  
    )

}

export default CreatePost;