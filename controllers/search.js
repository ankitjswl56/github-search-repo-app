import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { repository_search_url } from '../http.js';

// const baseURL = 'https://api.github.com/search/repositories'

const app = express();

app.use(bodyParser.json());

const router = express.Router();

router.get('/search', async (req,res)=>{
  try {
    const query = req.query.q
    const per_page = req.query.per_page
    const _sort = req.query._sort
    const response = await axios.get(`${repository_search_url}?q=${query}&per_page=${per_page}&sort=${_sort}`);
    res.send({
      status: 200,
      message: response.data
    })
  } catch(error) {
    res.send({
      status: 400,
      message: `error found: ${error}`
    })
  }
})

export default router;
