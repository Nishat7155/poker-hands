const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';
const ranks = '23456789TJQKA';

test('check that isFourOfKind returns truthy if is four of kind', () => {
  let hand = new Hand('♣2', '♦2', '♥2', '♠2', '♣3');
  let score = CompareHands.isFourOfAKind(hand);
  expect(score).toBeTruthy();
}
);

test('check that isFourOfKind returns falsey if not is four of kind', () => {
  let hand = new Hand('♣4', '♣5', '♥5', '♣5', '♣7');
  let result = CompareHands.isFourOfAKind(hand);
  expect(result).toBeFalsy();

});

test('check that isFourOfAKind returns 0 if not four of a kind', () => {
  let hand = new Hand('♣4', '♣5', '♥5', '♣5', '♣7');
  expect(CompareHands.isFourOfAKind(hand)).toBe(0);
});

test('check that isFourOfAKind returns a highest score for the strongest hand', () => {
  let hand1 = new Hand('♣5', '♣5', '♥5', '♣5', '♣7');
  let hand2 = new Hand('♣8', '♣8', '♥8', '♣8', '♣4');
  let score = CompareHands.isFourOfAKind(hand1);
  let score2 = CompareHands.isFourOfAKind(hand2);
  expect(score2).toBeGreaterThan(score)

});