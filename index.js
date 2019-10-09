import express from 'express';
import {getUserTweets} from './lib/scraper';

const app = express();
const PORT = 8060;

app.get('/', (req, res) => {
    res.send('TweetScraper is live!');
});

app.listen(PORT, () => console.log(`TweetScraper listening on port ${PORT}!`));

// getUserTweets('christisraisin')
