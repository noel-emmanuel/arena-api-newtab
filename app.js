console.log("yo the js file is linked");

// creating a request variable
let request = new XMLHttpRequest();

// assigning api url to variable
// note this is the first page and only returns 100 strings for some reason (order: oldest to newest)
let api_url = 'https://api.are.na/v2/channels/a-catalogue-of-simple-pleasures?page=1amp;per=300';
// GET http://api.are.na/v2/channels?page=2&amp;per=15
// requesting and opening connection to api url
request.open('GET', api_url);
let returnedStrings = [];

// as soon as the page is loaded...
request.onload = function() {
  // do this...
  // get the response and assign the contents to a variable
  let data = JSON.parse(this.response);

// accessing nested content array
  let blockContent = data.contents;
  // console.log(blockContent);

  // for loop to output each string content from other nested json contents
  for (var i = 0; i < blockContent.length; i++) {
    // a variable that stores strings from the array
    returnedStrings.push(blockContent[i].content);
  }

// a function to search if a string exists in the returned array
  function getString(textToFind) {
    let foundTextPos = returnedStrings.indexOf(textToFind);
    console.log(returnedStrings[foundTextPos] + " found!");
  }
// end function

  // console.log(returnedStrings);

  // now i have to display js content to html page to render
  // locking in the html element to replace
  let accessWebpage = document.getElementById('root');

  // each new tab must have a different sentence
  let randomString = Math.floor(Math.random() * returnedStrings.length);

  // rendering content to html page randomly 
  console.log(accessWebpage.innerHTML = returnedStrings[randomString]);
}


request.send();
