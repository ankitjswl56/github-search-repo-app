import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { repository_search_url } from '../http.js';

const app = express();

app.use(bodyParser.json());

const router = express.Router();

router.get('/search', async (req,res)=>{
  try {
    const query = req.query._query
    const _sort = req.query._sort
    const response = await axios.get(`${repository_search_url}?q=${query}&sort=${_sort}`);
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
