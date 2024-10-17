// question 27. Sum up to n terms.
// solution





let a = +prompt("Enter the number of terms to sum");

let sum = 0; // Initialize sum outside the loop

for (let i = 1; i <= a; i++) {
  sum += i; // Accumulate the sum
  console.log(`Sum up to ${i} terms: ${sum}`);
}