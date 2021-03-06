// const ids = new Set([1, 2, 3]);
// ids.add(2);
// ids.delete(2);
// for (const entry of ids.entries()) {
//   console.log(entry);
// }

const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData.get(person2));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.values()) {
  console.log(key);
}

