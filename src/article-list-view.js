(function(exports){

  function ArticleListView(articles) {
    this.articles = articles;
  }

  ArticleListView.prototype.getTitleHTML = function(){
    var articleList = this.articles;
    var toReturn = "<ul>";

    for (i=0; i < articleList.length; i++) {
      var currentArticleTitle = articleList[i].title;
      var currentArticleLink = articleList[i].url;
      var currentArticleImage = articleList[i].urlToImage;
      toReturn = toReturn + "<li>"
                          + "<img src=" + currentArticleImage +">"
                          + "<a href =" + currentArticleLink +">"
                          + currentArticleTitle + "</a></li>";
    }

    toReturn = toReturn + "</ul>";
    return toReturn;
  };

  exports.ArticleListView = ArticleListView;
})(this);
