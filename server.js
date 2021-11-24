import express from 'express';

import Search from './controllers/search.js';
import RepoDetails from './controllers/repo_details.js';

const app = express();

app.use('/api', Search)
app.use('/api', RepoDetails)


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