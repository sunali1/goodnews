// 'use strict';

describe('MatchWords', function() {

  var matchWords;
  var subject;
  var words;

  beforeEach(function() {
    matchWords = new MatchWords();
    subject = "Trump does it again";
    words = ["Trump", "Harassment", "Groped", "Murder", "Brexit", "Racist", "Misogynist", "Assault", "Weinstein", "Attack", "Attacks", "ISIS", "Terrorism", "Terrorist", "Conspiracy", "Fallout", "Sad", "Bad"];
  });

  it('determines whether a headline contains a word in the array', function() {
    expect(matchWords.matcher(subject, words)).toEqual(["Trump"]);
  });

});
