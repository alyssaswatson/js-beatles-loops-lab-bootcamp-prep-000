function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
  phrases.push (musicians[i] + " plays " + instruments[i]);

}
  return phrases;
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0
  while (i < facts.length) {
    array.push (`${facts[i]}!!!`)
    i++;
  }
  return array
}
