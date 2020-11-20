const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, your age ${age}, you are a ${gender}!`;
};

console.log(sayHi("Apple", 33, "male"));

export {};
