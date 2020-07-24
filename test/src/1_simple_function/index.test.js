'use strict';

const { expect } = require('chai');

const test = require('../../../src/1_simple_function');

describe('TEST 1 / Sock Dealer', () => {
  describe('Validation samples', () => {
    const samples = [
      { name: 'empty', args: [], expected: 0 },
      { name: 'single item', args: ['red'], expected: 0 },
      {
        name: 'mismatched',
        args: ['red', 'yellow', 'blue'],
        expected: 0,
      },
      {
        name: 'common case',
        args: [
          'red',
          'purple',
          'yellow',
          'red',
          'blue',
          'blue',
          'yellow',
          'red',
          'yellow',
          'green',
          'yellow',
        ],
        expected: 4,
      },
      {
        name: 'uncommon case',
        args: [
          'red',
          'red',
          'red',
          'red',
          'red',
          'red',
          'yellow',
          'red',
          'red',
          'red',
          'red',
        ],
        expected: 5,
      },
      {
        name: 'large unmatched',
        args: [
          'red',
          'purple',
          'yellow',
          'marroon',
          'blue',
          'green',
          'orange',
          'white',
          'black',
          'grey',
        ],
        expected: 0,
      },
    ];

    samples.forEach(sample => {
      it('correctly handles a(n) ' + sample.name + ' input array', function() {
        const res = test.sockMerchant(sample.args);
        expect(res).to.equal(sample.expected);
      });
    });
  });
});
