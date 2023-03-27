define([], function () {
  var defaultScore = `% LilyBin for Clairnote music notation.
% "Run LilyPond" to engrave some sheet music.
% clairnote-type = dn
\\include "clairnote.ly"

\\score {
  \\relative c' {
    \\clef treble
    \\time 4/4
    c d e f 
    g a b c
  }
  \\layout{}
  % \\midi{}
}
`;

  return defaultScore;
});
