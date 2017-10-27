(function(exports){

function articleFilter(unfilteredData){
  this.unfilteredData = unfilteredData;
  this.filteredData = [];
}

articleFilter.prototype.filterByTitle = function() {
  this.unfilteredData.filter((article) => {
    var articleTitle = article.title;
    var words = ["Trump", "Harassment", "Murder", "Brexit", "Racist", "Misogynist", "Assault", "Weinstein", "Attack", "ISIS", "Terrorism", "Terrorist", "Conspiracy", "Fallout", "Sad", "Bad"];
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

  exports.articleFilter = articleFilter;
})(this);
