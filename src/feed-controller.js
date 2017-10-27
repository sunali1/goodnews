(function(exports){

  function FeedController(){
    var matchWords = new MatchWords();
    var articles = new Articles();
    articles.getDataV2().then(function(data){
      var filteredData = data.filter((item) => {
        var subject = item.title;
        var words = ["Trump", "Harassment", "Groped", "Murder", "Brexit", "Racist", "Misogynist", "Assault", "Weinstein", "Attack", "Attacks", "ISIS", "Terrorism", "Terrorist", "Conspiracy", "Fallout", "Sad", "Bad"];
        // console.log(matchWords.matcher(subject, words));
        // console.log((matchWords.matcher(subject, words)).length === 0);
        if ((matchWords.matcher(subject, words)).length === 0) {return subject};
      });
      var view = new ArticleListView(filteredData);
      var html = view.getHTML();
      document.getElementById('app').innerHTML = html;
    });
  }

  exports.FeedController = FeedController;
})(this);
