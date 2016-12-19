var title;
var startYear;
var endYear;
var numOfRecords = 0;


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
  console.log(articlesArray);

  for(var i = 0; i < result.length; i++){
      title = article.headline.main;
  }
  
  console.log(title);
  /*var title = result.response.docs.headline;
  console.log(title);*/

}).fail(function(err) {
  throw err;
});



