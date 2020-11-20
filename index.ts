const name = "Apple",
  age = 22,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, your age ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};
