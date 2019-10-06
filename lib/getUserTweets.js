import request from 'request'
import cheerio from 'cheerio'

function fetchUserTweets(user){
  let userTweets = []

  request(`https://twitter.com/${user}`, (err, res, body) => {
    if(!err && res.statusCode == 200){
      const $ = cheerio.load(body)
      $('p.TweetTextSize').each((index, item)=>{
        let text = item.children[0].data
        userTweets.push(text)
        console.log(text, '\n')
      })
    }
  })

}
