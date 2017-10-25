(function(exports){

  function ArticleListView( articles = new Articles() ){
    this.articles = articles;
    this.articles.getData();
  }

  ArticleListView.prototype.getHTML = function(){
    var articleList = this.articles.data;
    var toReturn = "<ul>";

    for (i=0; i < articleList.length; i++) {
      var currentArticleTitle = articleList[i].title;
      toReturn = toReturn + "<li>" + currentArticleTitle + "</li>";
    }

    toReturn = toReturn + "</ul>";
    return toReturn;
  };

  exports.ArticleListView = ArticleListView;
})(this);
