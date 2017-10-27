(function(exports){

  function FeedController(){
    var articles = new Articles();

    articles.getDataV2().then(function(unfilteredData){

      var filter = new ArticleFilter(unfilteredData);
      filter.filterByTitle();
      var filteredArticles = filter.filteredData;
      var view = new ArticleListView(filteredArticles);
      var html = view.getTitleHTML();

      document.getElementById('app').innerHTML = html;
    });
  }

  exports.FeedController = FeedController;
})(this);
