import {getUserTweets} from './scraper';

const returnTweets = async (req, res, next) => {
  console.log(req.body);
  let tweets = await getUserTweets(req.body.handle)
  console.log(tweets)
};

export {returnTweets}
