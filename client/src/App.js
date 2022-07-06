import React,{useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

import CreatePost from "./components/CreatePost";

function App(){
    const[currentId, setCurrentId]= useState(null)
    const [postData, setPostData]= useState([]);
    const addPost=(post)=>{
      let posts  = [...postData,post]
      setPostData(posts)
    }
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<CreatePost addPost = {addPost} currentId={currentId} setCurrentId={setCurrentId}/>}/>
        </Routes>
      </Router>
    )
 
}

export default App;