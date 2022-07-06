const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/SocialTravelDatabase");
const port = process.env.API_PORT || 5000;
const socialTravelRouter = require("./routers/socialTravelRoutes")


app.use(express.json({limit:"50mb"}));
app.use(express.json({limit:"50mb",extended:true,parameterLimit:50000}));
// app.use(cors({origin:"http://localhost:3000"}));
app.use(cors({ origin: true, credentials: true }));


app.use('/posts/', socialTravelRouter)

connectDB()
app.listen(port,()=>{
      console.log(`We are cruising nicely on port ${port}`)
})


