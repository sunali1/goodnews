(function(exports){

  var apiCall = new apiCall();

  function apiCall() {

    var httpRequest = new XMLHttpRequest();
    var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c013df4cb4354f4ea56e3a7e16373797"
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = httpRequest.responseText
          var parseddata = JSON.parse(data);
          var contentArray = parseddata.articles
          document.getElementById('articles').innerHTML = parseddata.articles
        }
    };
    httpRequest.open("GET", url, true);
    httpRequest.send();
  }
  exports.apiCall = apiCall;
}) (this);
