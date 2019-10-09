import express from 'express';
import bodyParser from 'body-parser'

import {getUserTweets, getHTML} from './lib/scraper';

const app = express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());

const PORT = 8060;
const router = express.Router()

app.get('/', (req, res) => {
  res.send('TweetScraper is live!');
});

app.route('/user_scraper')
  .post(async function (req, res, next) {

  });

app.listen(PORT, () => console.log(`TweetScraper listening on port ${PORT}!`));
