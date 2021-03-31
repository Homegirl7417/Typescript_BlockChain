const name = "HyunKyeong Park",
    age = 24,
    gender = 'female';

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are a ${age}, you are a ${gender}`);
}

sayHi(name, age);
export {};