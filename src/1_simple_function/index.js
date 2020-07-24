'use strict';

const assert = require('assert');

/**
 * This function should take an array of socks identified by color
 * and return the number of pairs that were found.
 *
 * @param {String[]} socks array of socks
 * @returns {Number} the number of pair of socks
 */
function sockMerchant(socks) {
  // code your solution here
  socks.sort();
  let nbPairs = 0;
  let currentColor = socks[0];
  for (let i=1; i<socks.length; i++) {
    if (currentColor && currentColor === socks[i]) {
      nbPairs++;
      currentColor = null;
    } else {
      currentColor = socks[i];
    }
  }
  return nbPairs;
}

/* istanbul ignore next */
/* eslint-disable-next-line no-unused-vars */
function main() {
  // Example: expected output = 3 (pairs of socks)
  const socks = [
    'red',
    'purple',
    'yellow',
    'red',
    'yellow',
    'purple',
    'yellow',
  ];
  const nbPairs = sockMerchant(socks);

  /* eslint-disable-next-line no-console */
  console.log('number of pairs:', nbPairs);
  assert(nbPairs === 3, 'Wrong number of socks found');
}

if (!module.parent) {
  main();
}

module.exports = {
  sockMerchant,
};
