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
      toReturn = toReturn + "<article class='col-lg-30 col-md-30 col-sm-30 col-xs-60 col-xxs-120 animate-box fadeInUp animated'>"
                          + "<img src=" + currentArticleImage +" class='img-responsive' height='600' width='1200'>"
                          + "<figure> <a href =" + currentArticleLink +"></figure>"
                          + "<h2 class='col-lg-30 col-md-30 col-sm-30 col-xs-60 col-xxs-120 animate-box fadeInUp animated'>"
                          + currentArticleTitle + "</h2>"
                          + "</a></article>"
                          + "<div class='clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block'></div>"
    }

    toReturn = toReturn + "</ul>";
    return toReturn;
  };

  exports.ArticleListView = ArticleListView;
})(this);
