(function(exports){

  var apiCall = new apiCall();

  function apiCall() {
    // this.apiList = new ArticleList()
    // this.getApi()
console.log(this.apiArticles)

// apiCall.prototype.getApi = function(){

    var httpRequest = new XMLHttpRequest();
    var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c013df4cb4354f4ea56e3a7e16373797"
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = httpRequest.responseText
            console.log('1', data)
          var parseddata = JSON.parse(data).articles;
          console.log('2', parseddata)
          // var contentArray = JSON.stringify(parseddata)
          this.apiArticles = parseddata
          apiList = new ArticleList()
          apiList.getArticles(parseddata))
          // this.apiList.push(parseddata)
          console.log('4', parseddata)
          console.log('5', this.apiArticles)
        }
    };
    httpRequest.open("GET", url, true);
    httpRequest.send();
  }
// }
  exports.apiCall = apiCall;
}) (this);
