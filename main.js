// завдання 1
let num = 1;
while (num <= 10) {
  console.log(num);
  num += 1;
}

// завдання 2
for (let number = 2; number <= 20; number += 1) {
  if (number % 2 !== 0) {
    continue;
  }
  console.log(number);
}

// завдання 3
const num1 = 7;
for (let i = 1; i <= 10; i += 1) {
  console.log(`${num1} * ${i} = ${num1 * i}`);
}

// завданеня 4
let n1 = [1, 2, 3, 4, 5];
let i = 0;

while (i < n1.length) {
  console.log(n1[i]);
  i += 1;
}

// завдання 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= numbers.length; i += 1) {
  if (numbers[i] === 7) {
    break;
  }
  console.log(numbers[i]);
}

// // завдання 6
let n = 100;
for (let i = 1; i <= n ; i += 1) {
  if (i === n) {
   break;
  }
  console.log(i);
}

// // завдання 7
let n2 = 1;
while (n2 <= 20) {
  if (n2 % 3 === 0) {
    n2 += 1;
    continue;
  }
  console.log(n2);
  n2 += 1;
}
