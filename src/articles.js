(function(exports){

  function Articles() {
  }

  Articles.prototype.getData = function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=c013df4cb4354f4ea56e3a7e16373797";
    var self = this;

    xhr.addEventListener("load", function() {
      var data = JSON.parse(this.response).articles;
      resolve(data);
    });
    xhr.open("GET", url);
    xhr.send();
  };

  Articles.prototype.getDataV2 = function() {
    return new Promise(Articles.prototype.getData);
  };

  exports.Articles = Articles;
})(this);
