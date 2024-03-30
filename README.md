# `Math.random()` Internals

When your mind wanders to the realms of generating random numbers, you might first land on the mystical `Math.random()` found in the world of JavaScript. Driven by curiosity, I embarked on an adventure to unravel the secrets behind this wizardry.

## Crafting Magic with `Math.random()`

At the core of `Math.random()` lies an ancient spell known as Xorshift. This magical formula is both swift and light, consuming little of our mystical memory resources, though it must be noted, it conjures numbers that are almost, but not entirely, unpredictable.

### From Ancient Scripts to Modern Spells: The Transformation to TypeScript

My quest led me to discover the original incantations of Xorshift in the ancient C scrolls. With a wave of my wand and a flick of my keyboard, I transformed these spells into the modern tongue of TypeScript, as shown below:

```typescript
class Xorshift64State {
  constructor(public a: number) {}
}

function xorshift64(state: Xorshift64State): number {
  let x = state.a;
  // The magical XOR dance begins here
  x ^= x << 7;
  x ^= x >>> 9;
  state.a = x;
  return x;
}

const init = new Xorshift64State(1);
console.log(xorshift64(init)); // The spell reveals the number 129
console.log(xorshift64(init)); // Followed by the number 16417

const init2 = new Xorshift64State(2);
console.log(xorshift64(init2)); // And for a different spell, 258
```

These numbers are not mere figures; they are the offspring of our initial seeds. The magic lies in how these seeds transform, creating an illusion of randomness with each invocation.

### Deciphering the Enchantment: The XOR Mystique

In our magical toolkit, XOR stands as the "exclusive OR" marked by the symbol `^=`. It's a spell that only reveals truth when exactly one of two bits is true. For example, in the realm of JavaScript:

```javascript
let x = 10;
x ^= 6; // The XOR spell is cast
console.log(x); // Behold, the transformation to 12!
```

This arcane knowledge extends to the shifting of bits, a maneuver that moves them left (`<<`) or right (`>>>`), a simple yet profound manipulation of the very essence of numbers.

### Following the Magical Thread

Let's dive deeper, tracing the path of a number as it undergoes transformation through our XOR spells:

```javascript
let x = 8; // The chosen one
x ^= x << 7; // Shifted left and XOR'd
x ^= x >>> 9; // Then shifted right, unsigned, and XOR'd again
console.log(x); // The magic concludes, revealing 1034
```

Each step is a dance, shifting, XOR'ing, and transforming, leading to results that dazzle and surprise.

## Reimagining Math.random(): A Wizard's Experiment

Inspired, I ventured to reimagine `Math.random()` itself, employing the current time as our seed in a concoction of shifts and XORs:

```javascript
let seed = Date.now(); // The seed from the sands of time

function Random() {
  seed ^= seed << 7; // Our familiar XOR and shift spells
  seed ^= seed >>> 9;
  return Math.min(1, Math.abs(seed) / 2000000000); // Ensuring our result stays within bounds
}

console.log(Random());
console.log(Random());
console.log(Random());
```

Though enchanting, consider this more a wizard's playful experiment than a spell for daily use.

## In Conclusion: The Quest Continues

Beyond Xorshift, myriad other spells of pseudo-random generation beckon, from the linear congruences to the arcane arts of subtractive generation. For those in search of the most impenetrable randomness, the cryptographically secure `crypto.getRandomValues()` offers a fortress of unpredictability.

Thus, we see that behind each seemingly simple `Math.random()`, there lies a world of algorithms, each with its own lore, waiting for the curious and the bold.

## Recommended Readings

- [Crypto: `getRandomValues()` method](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)
