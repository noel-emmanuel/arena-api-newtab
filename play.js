console.log("js file is linked!");
// an array to get all the pages in the channel because only 100 string limit in one go (page)
let api_urls = ['https://api.are.na/v2/channels/a-catalogue-of-simple-pleasures?page=1amp;per=300', 'https://api.are.na/v2/channels/a-catalogue-of-simple-pleasures?page=2amp;per=300', 'https://api.are.na/v2/channels/a-catalogue-of-simple-pleasures?page=3amp;per=300']
// creating a web request variable
let request = new XMLHttpRequest();
// an empty array to store massive amounts of text content later on
let returnedStrings = [];


// loop through all the urls and fetch crowdsourced text from all of them
for (var i = 0; i < api_urls.length; i++) {
  request.open('GET', api_urls[i]);
  console.log("opened request");
  // working till here
  request.onload = function() {
    console.log("page loaded");
    let data = JSON.parse(this.response);
    console.log(data);
  }
  request.send();
}
