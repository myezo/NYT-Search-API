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
      
      //set variables to API results
      title = articlesArray[i].headline.main;
      snippetText = articlesArray[i].snippet;
      date = articlesArray[i].pub_date;
      articleURL = articlesArray[i].web_url;
      multimediaArray = articlesArray[i].multimedia;
      
      //testing for loop
      console.log(title + "\n " + snippetText + "\n " + date + "\n " + articleURL);
      

      var articleWrapper = $("<div>");

      var articleResults = $("<div>").addClass("media")
                            .append( $("<h4>").addClass("media-heading").text(title) )
                            .append( $("<p>").addClass("media-object").text(snippetText) )
                            .append( $("<p>").addClass("media-object").text(date) )
                            .append( $("<a>").addClass("media-object").attr("href", articleURL)
                            .html("<p>Read More</p>"));

      articleWrapper.append(articleResults);

      $('#search-results').append(articleWrapper);
  }
  

}).fail(function(err) {
  throw err;
});



