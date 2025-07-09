import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();


dotenv.config();

app.use(cors());
app.use(express.json());




app.get('/api', (req, res) =>{
  res.send("Hello Buddy");
  console.log("Hwl Wor;ld");
})

app.listen(process.env.PORT,() => {
  console.log("Server is running");
})