(function(exports){

  function FeedController(){
    var articles = new Articles();
    articles.getDataV2().then(function(data){
      var filteredData = data.filter((item) => {
        var headline = item.title;
        var n = headline.includes("Trump");
        if (n == false) {return headline};
      });
      var view = new ArticleListView(filteredData);
      var html = view.getHTML();
      document.getElementById('app').innerHTML = html;
    });
  }

  exports.FeedController = FeedController;
})(this);
