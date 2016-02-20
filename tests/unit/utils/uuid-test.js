import uuid from 'ember-simple-uuid';
import { module, test } from 'qunit';

const UUID_FORMAT = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

let actual, expected;


module('Unit | Utility | uuid');

test('generates a 36-character unique id string without arguments', function(assert) {
  assert.expect(3);

  const myId = uuid();

  expected = 36;
  actual = myId.length;
  assert.equal(actual, expected);

  expected = 'string';
  actual = typeof myId;
  assert.equal(actual, expected);

  expected = true;
  actual = UUID_FORMAT.test(myId);
  assert.equal(actual, expected);
});

test('spread arguments to fit the uuid.v4 signature', function(assert) {

  assert.expect(2);

  const myDigits = [];
  const choices = [
    0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
    0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
  ];

  uuid({ random: choices }, myDigits, 0);
  uuid({ random: choices }, myDigits, 16);

  expected = 32;
  actual = myDigits.length;
  assert.equal(actual, expected);

  expected = true;
  actual = Array.isArray(myDigits);
  assert.equal(actual, expected);
});
