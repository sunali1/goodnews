(function(exports){

  function Articles() {
    this.data = '';
  }

  Articles.prototype.getData = function() {
    var httprequest = new XMLHttpRequest();
    var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c013df4cb4354f4ea56e3a7e16373797";
    var self = this;

    var callback = function() {
      self.data = JSON.parse(this.response).articles;
    }

    httprequest.addEventListener("load", callback);
    httprequest.open("GET", url);
    httprequest.send();
  };

  exports.Articles = Articles;
})(this);
