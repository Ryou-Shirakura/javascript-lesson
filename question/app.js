//section5 基礎
// Q1
let nickname = '白倉'
let age = '26'
console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です');

// Q2
const languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。')

// Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };

console.log(user.age);

// Q4
let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];

console.log(playerList[1].favorites[1]);

// Q5
const totalAge = playerList.reduce((total, playList) => total + playList.age , 0);
const averageAge = totalAge / playerList.length;
console.log(averageAge);

// Q6
function sayHello () {
    console.log('Hello');
}

sayHello();

let sayWorld = function() {
    console.log('World');
}
sayWorld();

// Q7
user.birthday = '2000-09-27';
user.sayHello = () => {
    console.log('Hello!');
}

user,sayHello();
// Q8

let calc = {};

calc.add = function add (x, y ) {
    console.log(x + y);
}

calc.subtract = function subtract (x, y ) {
    console.log(x - y);
}

calc.multiply = function multiply (x, y ) {
    console.log(x * y);
}

calc.divide = function divide (x, y ) {
    console.log(x / y);
}

calc.add(4, 3);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(35, 7);

// Q9
function remainder (x, y) {
    return x % y ;
}
const result = remainder(7, 3);
console.log(`5 を 3 で割った余りは ${result} です。`);

// Q10
// letで定義した x は foo関数内で定義しているため、console.log(x);でxを参照しようとするとスコープ対象がのため、エラーが表示される。

//section6 応用
// Q1
let randomMath = Math.floor(Math.random() * 10);
console.log(randomMath);

// Q2
setTimeout(() => {
    console.log('Hello World!');
}, 3000);

// Q3
let num = 5;

if (num > 0) {
    console.log('num is greater than 0');
} else if (num < 0) {
    console.log('num is less than 0');
} else {
    console.log('num is 0');
};

// Q4
let number = [];
for (let i = 0; i < 100; i++ ) {
     number.push(i);
}
console.log(number);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++ ) {
    let index = mixed[i];
    if (typeof index === 'number' && index % 2 === 0) {
        console.log('even');
    } else if (typeof index === 'number' && index % 2 === 1) {
        console.log('odd');
    }else {
        console.log('not number');
    }
}