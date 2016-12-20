var title =[];
var startYear;
var endYear;
var numOfRecords = 0;
var titleDiv;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "87aa1a53935e4b768f3d84b1ec41ad22"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  var articlesArray = result.response.docs;
  var resultsContainer = $("<div>");
  var title, snippetText, date, articleURL, multimediaArray, thumbnailURL;
  console.log(articlesArray);

  for(var i = 0; i < articlesArray.length; i++){
      title = articlesArray[i].headline.main;
      snippetText = articlesArray[i].snippet;
      date = articlesArray[i].pub_date;
      articleURL = articlesArray[i].web_url;
      multimediaArray = articlesArray[i].multimedia;
      
      console.log(title + "\n " + snippetText + "\n " + date + "\n " + articleURL);
      titleDiv = $('<h3>');
      titleDiv.text(title[i])
      $('#title').append(titleDiv);
  }
  

}).fail(function(err) {
  throw err;
});



