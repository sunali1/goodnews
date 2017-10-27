(function(exports){

function ArticleFilter(unfilteredData){
  this.unfilteredData = unfilteredData;
  this.filteredData = [];
}

ArticleFilter.prototype.filterByTitle = function() {
  this.unfilteredData.filter((article) => {
    var articleTitle = article.title;
    var words = ["Trump", "Harassment", "Groped", "Groping", "Murder", "Murderer", "Murdered", "Rape", "Raping", "Rapist", "War", "Battle", "Demands", "Demand", "Killing", "Killer", "Killed", "Brexit", "Racist", "Racism", "Misogynist", "Assault", "Weinstein", "Attack", "Attacker", "Attacks", "ISIS", "Terrorism", "Terrorist", "Conspiracy", "Fallout", "Sad", "Bad"];
    console.log(matcher(articleTitle, words));
    console.log((matcher(articleTitle, words)).length === 0);
    if ((matcher(articleTitle, words)).length === 0)
      this.filteredData.push(article);
  });
};

function matcher(subject, words) {
   var regexMetachars = /[(){[*+?.\\^$|]/g;
   for (var i = 0; i < words.length; i++) {
       words[i] = words[i].replace(regexMetachars, "\\$&");
   }
   var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");
   return subject.match(regex) || [];
}

  exports.ArticleFilter = ArticleFilter;
})(this);
