const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';


test('check that isOnePair returns correct point value for a one pair hand', () => {
  let hand1 = new Hand('♥9', '♦9', '♣7', '♠5', '♣6')
  let hand2 = new Hand('♥Q', '♦Q', '♣7', '♠5', '♣6')
  let scoreHand1 = CompareHands.isOnePair(hand1);
  let scoreHand2 = CompareHands.isOnePair(hand2)
  expect(scoreHand2).toBeGreaterThan(scoreHand1);
});

test('check that isOnePair returns 0 for a non-one pair hand', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♠6', '♣5');
  let result = CompareHands.isOnePair(hand);
  let expected = 0;
  expect(result).toBe(expected);
});

test('check that isOnePair returns 0 if not one pair', () => {
  let hand = new Hand('♣9', '♣8', '♥7', '♣6', '♣5');
  expect(CompareHands.isOnePair(hand)).toBe(0);
});


test('check that isOnePair returns highest score for the strongest one pair hand', () => {
  let hand1 = new Hand('♥9', '♦9', '♣7', '♠5', '♣6');
  let hand2 = new Hand('♥Q', '♦Q', '♣7', '♠5', '♣6');
  let scoreHand1 = CompareHands.isOnePair(hand1);
  let scoreHand2 = CompareHands.isOnePair(hand2);
  expect(scoreHand2).toBeGreaterThan(scoreHand1);
});