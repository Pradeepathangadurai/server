import express from 'express';
import bodyParser from 'body-parse';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routers/Posts.js';


const app = express();

app.use('/Posts' , postRouter);

app.use (bodyParser.json({limit: "30mb" , extended : true}));
app.use (bodyParser.urlencoded({limit: "30mb" , extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Javascript <password123>@cluster0.x4ton0z.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL , {useNewUrlParser : true , useUnifiedTopology : true})
  .then(()=>app.listen(PORT , () => console.log(`server running on port:${PORT}`)))
  .catch((error)=> console.log (error.message));
  mongoose.set ('useFindAnModify' , false);

// https://www.mongodb.com/cloud/atlas 