import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { repository_url } from '../http.js';

const app = express();

app.use(bodyParser.json());

const router = express.Router();

router.get('/repodetails', async (req,res)=>{
  try {
    const owner = req.query.owner
    const repo = req.query.repo
    const response = await axios.get(`${repository_url}/${owner}/${repo}/commits`);
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
