import express from 'express';
import bodyParser from 'body-parser'

import {getUserTweets} from './lib/scraper';
//change dril to whatever handle then check your console
getUserTweets('dril')
// const app = express()
//   .use(bodyParser.urlencoded({extended: true}))
//   .use(bodyParser.json());
// const PORT = 8060;
// const router = express.Router()

// app.get('/', (req, res) => {
//     res.send('TweetScraper is live! Austin, bich');
// });
// app.route('/user_scraper')
//   .post(async function (req, res, next) {
//     console.log(req.body.handle)
//     let product = getUserTweets(req.body.handle)
//     console.log(product)
//     res.send({tweets: product})
//   });

// app.listen(PORT, () => console.log(`TweetScraper listening on port ${PORT}!`));
