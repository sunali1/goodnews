(function(exports){

function MatchWords(){

}

MatchWords.prototype.matcher = function(subject, words) {
    var regexMetachars = /[(){[*+?.\\^$|]/g;

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].replace(regexMetachars, "\\$&");
    }

    var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");

    return subject.match(regex) || [];
};

  exports.MatchWords = MatchWords;
})(this);
