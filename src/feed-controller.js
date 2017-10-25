(function(exports){

  function FeedController( view = new ArticleListView() ){
    this.view = view;
  }

  FeedController.prototype.displayNews = function () {
    var newsHTML = this.view.getHTML();
    document.getElementById('app').innerHTML = newsHTML;
  };

  exports.FeedController = FeedController;
})(this);
