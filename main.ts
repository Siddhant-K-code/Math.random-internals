/**
 * Represents the state of the Xorshift64 random number generator.
 * Xorshift64 is a class of pseudorandom number generators.
 */
class Xorshift64State {
  /**
   * Initializes a new instance of the Xorshift64State class.
   * @param a The initial state value. This value should not be zero.
   */
  constructor(public a: number) {}
}

/**
 * Generates a pseudorandom number using the Xorshift64 algorithm.
 * This function modifies the state passed to it.
 * @param state The current state of the generator.
 * @returns A pseudorandom number generated from the given state.
 */
function xorshift64(state: Xorshift64State): number {
  let x = state.a;
  // Perform the xorshift operations
  x ^= x << 7;
  x ^= x >>> 9;
  state.a = x;
  return x;
}

// Example usage:

// Initialize the generator with a seed value of 1
const init = new Xorshift64State(1);
// Generate and log two pseudorandom numbers using the initial state
console.log(xorshift64(init)); // Log the first generated number
console.log(xorshift64(init)); // Log the second generated number

// Initialize a new generator with a different seed value of 2
const init2 = new Xorshift64State(2);
// Generate and log a pseudorandom number using the new state
console.log(xorshift64(init2)); // Log the generated number
