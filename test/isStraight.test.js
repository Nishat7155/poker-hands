const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that isStraight returns falsy if not straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦5');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that isStraight returns 0 if not straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦5');
  expect(CompareHands.isStraight(hand)).toEqual(0);
});


test('check that isStraight returns highest score for the strongest hand', () => {
  let hand1 = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥K', '♦Q', '♣J', '♥10', '♦A');
  let scoreHand1 = CompareHands.isStraight(hand1);
  let scoreHand2 = CompareHands.isStraight(hand2);
  expect(scoreHand1).toBeGreaterThan(scoreHand2);
});