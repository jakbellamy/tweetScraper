import request from 'request'
import cheerio from 'cheerio'

function scrubEmoji(str){
  let product = str.split(' ')
  for(let i=0; i<product.length; i++){
    if(product[i].includes('pic')){product.splice(i, 1)}
  }
  return product.join(' ')
}

function scrubSpace(str){
  return str.substring(3, str.length - 1)
}

function getUserTweets(user){
  let userTweets = []
  request(`https://twitter.com/search?q=from%3A${user}&src=typed_query`, (err, res, body) => {
    if(!err && res.statusCode == 200){
      const $ = cheerio.load(body)
      $('div.js-tweet-text-container').each((index, div) => {
        let tweet = scrubSpace($(div).text())
        if(!tweet.includes('https://')){
          if(tweet.includes('pic.twitter.com')){
            userTweets.push(scrubEmoji(tweet))
          } else {
            userTweets.push(tweet)
          }
        }
      })
    }
    console.log(userTweets)
  })
}

export {getUserTweets}