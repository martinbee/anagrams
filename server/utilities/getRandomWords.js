const wordList = require('../data/wordList');

function getRandomWords(options) {
  function word() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof(options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof(options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }

  const total = options.min + randInt(options.max + 1 - options.min);
  const results = [];

  for (let i = 0; (i < total); i++) {
    results.push(word());
  }

  if (options.join) {
    results = results.join(options.join);
  }

  return results;
}

module.exports = getRandomWords;
