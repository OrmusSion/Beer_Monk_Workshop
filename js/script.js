"use strict";
// const nmnmnm = document.querySelector(".footer__nav-social-action-button");

// console.log(nmnmnm);
// nmnmnm.classList.toggle('aaa');



// console.log("Hop Monk");

// let Monk = "Hop Monk";
// console.log(Monk);

// function text(word1,word2) {
// 	// let word1 = "Monk";
// 	// let word2 = "Beer";

// 	console.log(word1 + " " + word2);
// }

// text("Monk","Beer");

// function formul(num1,num2) {
// 	if (num2 > num1) {
// 		let sum = Math.sqrt(num1 ** 2 + num2 ** 2);
// 		console.log(sum);
// 	}
// }

// formul(5,10);

// function formul(num1,num2) {
// 	let num = 0;
// 	while (num1 < num2) {
// 		num++;
// 		num1++;
// 		if (num1 == 7) continue;

// 		if (num1 == 10) break;
// 		console.log(num);
// 	}
// }

// formul(0,15);

// let ironMaiden = {
// 	album: "Iron Maiden",
// 	year: 1980,
// 	"like album": 1999,
// }

// console.log(ironMaiden["like album"]);

// let num = 5e8;
// console.log(num);

// let num = 1989;
// console.log(num.toString(2));

// let numOne = 1.005 + Number.EPSILON;
// let num = Math.round(numOne * 100) / 100;
// console.log(num);

// let value = parseFloat("135.58px");
// console.log(value + 20);

// let arrOne = [10,20,30];

// console.log(arrOne);

// arrOne.splice(1,0,15);
// arrOne.splice(3,0,25);

// arrOne.splice(2,2);

// console.log(arrOne);

// console.log(arrOne.indexOf(25));

// let arrTwo = [5,10,15];

// console.log(arrTwo);

// arrTwo.push(20);

// console.log(arrTwo);

// arrTwo.pop();

// console.log(arrTwo);

// let arrThree = [50,10,30,60,20,];

// console.log(arrThree);

// arrThree.splice(2,0,40);

// console.log(arrThree);

// console.log(arrThree.indexOf(20));

// let arr = [
// 	{name: 'aza', age:10},
// 	{name: 'bzb', age:20},
// 	{name: 'czc', age:30},
// 	{name: 'dzd', age:40},
// 	{name: 'eze', age:50},
// ]

// let result = arr.find(function(item, index, array){
// 	return item.age === 50;
// 	// return index == 3;
// 	// return item.name == 'dzd';
// })

// console.log(result);

// let arr = [
// 	{ name: 'aza',age: 10 },
// 	{ name: 'bzb',age: 20 },
// 	{ name: 'czc',age: 30 },
// 	{ name: 'dzd',age: 40 },
// 	{ name: 'eze',age: 50 },
// ]

// let resultFilter = arr.filter(function (item,index,array) {
// 	return item.age >= 30;
// })

// console.log(resultFilter);

// let arrFour = [5,10,30,60,2,];
// arrFour.splice(2,0,40);

// function sortFunction(a,b) {
// 	console.log(`${a} and ${b}`);

// 	return a - b;
// }

// console.log(arrFour.sort(sortFunction));

// let arrFive = ['aza','bzb','czc','dzd','eze',];

// let resultMap = arrFive.map(function (item,index,array) {
// 	return item[1];
// })

// console.log(resultMap);

// let str = "10.20.30.40.50.60.70.80.90.100";

// let arrSix = str.split('.',5);

// console.log(arrSix);

// // for (let i = 0; i < arrSix.length; i++) {
// // 	console.log(arrSix[i]);
// // }

// for (let arrItemi of arrSix) {
// 	console.log(arrItemi);
// }

// arrSix.forEach(function (item,index,array) {
// 	console.log(`${item} // ${index} // ${array}`);
// });

// let arrSeven = [10,20,30,40,50,60,70,80,90,100];//550

// let value = arrSeven.reduce(function (previousValue,item,index,array) {
// 	return item + previousValue;
// },50)

// console.log(value);

// let users = ['van','ish'];
// console.log(users);
// users.push('ol');
// console.log(users);

// let newUser = users.slice(1,2);
// console.log(newUser);

// users.unshift('mash','pash');
// console.log(users);

// let sesds = 'van,ish,ol';
// let asdsad = sesds.split(',');
// console.log(asdsad);

// const textElement = document.querySelector('.contact__title__text');
// console.log(textElement);

// const ttttt = textElement.innerHTML;

// console.log(ttttt);

// textElement.innerHTML = `<p>${ttttt}</p> <p>azaza</p>`;

// const newElement = document.createElement('div');

// newElement.innerHTML = 'Gork and Mork';

// console.log(newElement);

// textElement.before(newElement);

// const newElement2 = document.createElement('div');

// newElement2.innerHTML = `${newElement.innerHTML} WAAAAAAAAGH!!!!!`;

// textElement.after(newElement2);

// const fgfgfg = textElement.nextSibling;

// console.log(fgfgfg);

// textElement.insertAdjacentHTML(
// 	'afterend', `<p>
// 		asdsadasdasdasdasdsad
// 	</p>`
// );

// const removeElement = document.querySelector('.contact__body');

// removeElement.remove();

// const nmnmnm = document.querySelector(".footer__nav-social-action-button");

// console.log(nmnmnm);
// nmnmnm.classList.toggle('aaa');