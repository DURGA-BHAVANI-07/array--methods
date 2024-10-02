// How do you add an element to the end of an array?
var a=["Durga"];
a.push("Bhavani");
console.log(a);

// How do you remove the last element from an array?
var a=["Durga","Bhavani","kalisetti"];
// var a1=["bhavani"]
a.pop();
console.log(a);

// How do you add an element to the beginning of an array?
var a1=["a,b,c,d"];
a1.unshift("lowercase");
console.log(a1);

// How can you remove the first element from an array?
var a2=["Apple","oranges","mangos","banana"];
a2.shift()
console.log(a2);

// How do you reverse the elements in an array?
let str=[1,2,3,4,5]
str.reverse();
console.log(str);

// How can you find the index of a specific value in an array?
var a1=["happy", "unhappy","lucky","unlucky"]
var indexofvalue=a1.indexOf(-1)
console.log(a1);
console.log(indexofvalue);

// How can you check if a certain value exists in an array?
var a = ["1, 2, 3, 4, 5"];
console.log(a.includes(30));
//  console.log(a.includes(0));

// How can you sort the elements of an array in ascending order?
let string=["Bhavani","Anush","Chandini"]
string.sort()
console.log(string);

// How can you convert an array to a string using commas as separators?
let strr=[1,2,3,4,5];
let resultstr=strr.join("");
console.log(resultstr);

// "Write a code snippet that adds an element to the end of an array, then removes the first element.
var Names=["Kalisetti","Durga","bhavani"];
Names.push("divya");
Names.shift()
console.log(Names);

// How can you reverse an array and then join the elements into a string?
var a=["hello","how", "are","you"];
var b= a.reverse()
console.log(b)
var c=b.join("")
console.log(c)

// Write a code that first sorts an array in ascending order, then removes the last element.
var strr1=["Banana","Apple","Dog","Cat"]
strr1.sort()
strr1.pop()
console.log(strr1)

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var Numbers=[5,6,7]
Numbers.unshift(1,2,3,4)
Numbers.shift()
Numbers.length
console.log(Numbers)

// How do you combine two arrays, sort the combined array, and then remove the last element?
var str3=["durga" ,"Bhavani","Amma"]
var str4=["kalisetti"]
var str4=str3.concat(str4)
console.log(str4);
str4.pop()
console.log(str4);
