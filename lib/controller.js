import async from 'async';
import {getUserTweets} from './scraper';

const returnTweets = (req, res) => {
  async.waterfall([
    _getHandle(req),
    _queryUserTweets,
    _setRes(res),
  ]);
};

const _getHandle = (req, res) => {
  return function(callback){
    let handle = req.body.handle;
    callback(null, handle);
  };
};

const _queryUserTweets = (handle, callback) => {
  return function(callback){
    let tweets = getUserTweets(handle);
    callback(null, tweets);
  };
};

const _setRes = (tweets, callback) => {
  return function(callback){
    let product = {tweets: tweets};
    callback(null, product);
  };
};

const _sendRes = (product, callback, res) => {
  return function(callback){
    res.send(product);
  };
};

export {returnTweets};
