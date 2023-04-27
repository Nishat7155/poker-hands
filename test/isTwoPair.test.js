const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that isTwoPair returns truthy is two pair', () => {
	let hand = new Hand('♥J','♠J','♣3','♠3','♥2');
	expect(CompareHands.isTwoPair(hand)).toBeTruthy();
})

test('Check that isTwoPair returns falsy is not two pair', () => {
	let hand = new Hand('♥7','♦3','♣2','♠6','5♠');
	expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('Check that falsy isTwoPair returns as 0', () => {
	let hand = new Hand('♥7','♦3','♣2','♠6','5♠');
	expect(CompareHands.isTwoPair(hand)).toBe(0);
});

test('test that isTwoPair returns a higher score for a stronger hand (if two hands but with flush)', () => {
  let hand1 = new Hand('♥J','♠J','♣3','♠3','♥2');
  let hand2 = new Hand('♥7','♦3','♣2','♠6','5♠');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});
