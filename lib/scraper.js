import request from 'request';
import cheerio from 'cheerio';

//For the purposes of implementation in quotable, I have scrubbed tweets that include line breaks
function scrubEmoji(str){
  let product = str.split(' ');
  for(let i=0; i<product.length; i++){
    if(product[i].includes('pic')){
      product.splice(i, 1)};
  };
  return product.join(' ');
};

function scrubSpace(str){
  return str.substring(3, str.length - 1);
};

async function getHTML(user){
  const html = request(`https://twitter.com/search?q=from%3A${user}&src=typed_query&f=live`);
  return html;
};

async function getUserTweets(html){
  let product = [];
  const $ = cheerio.load(html);
  $('div.js-tweet-text-container').each((index, div) => {
    let tweet = scrubSpace($(div).text());
    if(!tweet.includes('https://')){
      if(tweet.includes('pic.twitter.com')){
        product.push(scrubEmoji(tweet));
      } else if(!tweet.includes('\n')){
        product.push(tweet);
      };
    };
  });
  return product;
};
 
async function runScraper(handle){
   const htmlPromise = await getHTML(handle);
   const targetHTML = await Promise.all([htmlPromise]);
   const userTweets = await getUserTweets(targetHTML);

   return userTweets;
};

export {runScraper};
