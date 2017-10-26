(function(exports){

  function FeedController(){
    var articles = new Articles();
    console.log("1");
    articles.getDataV2().then(function(data){
      var view = new ArticleListView(data);
      var html = view.getHTML();
      console.log("4");
      document.getElementById('app').innerHTML = html;
    });
  }

  exports.FeedController = FeedController;
})(this);
