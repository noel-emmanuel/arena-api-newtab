console.log("yo the js file is linked");

// creating a request variable
let request = new XMLHttpRequest();

// assigning api url to variable
let api_url = 'https://api.are.na/v2/channels/a-catalogue-of-simple-pleasures?page=1amp;per=300';
// GET http://api.are.na/v2/channels?page=2&amp;per=15
// requesting and opening connection to api url
request.open('GET', api_url);

// as soon as the page is loaded...
request.onload = function() {
  // do this...
  // get the response and assign the contents to a variable
  let data = JSON.parse(this.response);

// accessing block array
  let textContent = data.contents;
  // console.log(textContent);

  // for loop to output each string from the array
  for (var i = 0; i < textContent.length; i++) {
    let returnedStrings = textContent[i].content;
    console.log(returnedStrings);
    // let accessWebpage = document.getElementById('root');
    // console.log(accessWebpage.innerHTML = "<li>" + returnedStrings + "</li>");
  }
}



request.send();
