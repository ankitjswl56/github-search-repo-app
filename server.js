import express from 'express';

const app = express();


app.get('/', async (req, res)=>{
  try {
    res.json({
      status : 200,
      message: 'PONG'
    });
  } catch (error) {
    res.json({
      status: 400,
      message: error
    });
  }
})

app.listen(process.env.PORT || 3001 , ()=>{
  console.log('Server is live');
})