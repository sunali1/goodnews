(function(exports){
  function ArticleList(){
    // this.articles = new apiCall()
  }
  //
  ArticleList.prototype.getArticles = function(parseddata){
    // this.articles.getApi();
    for (var i = 0; i <  parseddata.length; i++){
      return (parseddata[i]);
    };
  };
  exports.ArticleList = ArticleList;
  console.log(ArticleList)

})(this);
