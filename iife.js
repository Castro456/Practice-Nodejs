(function () {
  const person = 'Tenma'
  console.log(person);
})(); // Without ; here it will throw an error

(function () {
  const person = 'Monster'
  console.log(person);
})();

// Immediately Invoke Function Expression (IIFE)

// This is how modules are wrapped (using Function wrapper) so that when is required it won't throw error on variable name