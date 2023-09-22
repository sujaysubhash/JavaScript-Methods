// let arr=["red","blue","yellow","violet"];

// console.log(arr);

// let last=arr.pop();

// console.log("removed color:\t"+last);
//Array 1
let arr=["Orange","Apple","Grape"];

let content= document.getElementById("para").value
let con1=document.getElementById("para").innerHTML=arr;
//pop method is used for removing the last value in an array
arr.pop();
let newArr=document.getElementById("para1").innerHTML="New Array after pop: "+arr;

//Array 2
let arr1=[2,3,8,10];
let con2=document.getElementById("para2").innerHTML=arr1;
let arr2=[5,6,7];
//push method is used for combining the old array and it returns a newly formed array
arr1.push(...arr2);

let content2=document.getElementById("para2").value;
let pushed=document.getElementById("push").innerHTML="Pushed array: "+arr1;

//Mapping is used for calculating the square root of the values in an array and returns a new array.
let Nmap=[2,4,6,8];
let nonMap=document.getElementById("noMap").value;
let noMap=document.getElementById("noMap").innerHTML="Non-mapped Array:  " +Nmap

let square=Nmap.map(number => number * number);
let mapping=document.getElementById("map").value;

let map=document.getElementById("map").innerHTML= "Mapped Array: " +square;

//Unshift is used for adding the new value at the beginning of an array.
let firstArray=["Bmw","Audi","Ferrari"];
let first=document.getElementById("nonshift").value;
let fArray=document.getElementById("nonshift").innerHTML=firstArray;

firstArray.unshift("Volvo");
//the passed value will be added at the beginning of the array.
let unshift=document.getElementById("unshift").value;
let unshiftout=document.getElementById("unshift").innerHTML=firstArray;

//reduce method is used to iterate through the values of an array and it returns one result.


let array=[2,4,10];

let old=document.getElementById("normal").value;
let oldArr=document.getElementById("normal").innerHTML="Array : "+array;


let sum=array.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue;
})

let newArray=document.getElementById("reduce").value;
let newArrayy=document.getElementById("reduce").innerHTML="Sum of the array: "+sum;

//String methods
let str="hello world"
let upper=str.toUpperCase();

let upperString=document.getElementById("string").value;
let upperstr=document.getElementById("string").innerHTML="Upper case: "+upper;


let string="Hello World";
let lower=string.toLowerCase();

let lowString=document.getElementById("lower").value;
let lowerStr=document.getElementById("lower").innerHTML="Lower case: "+lower;

let len=string.length;
let length=document.getElementById("len").value;
let strLength=document.getElementById("len").innerHTML="String length: "+len;

//slice
let sliced=string.slice(0,5);

let slice=document.getElementById("slice").value;
let sl=document.getElementById("slice").innerHTML= "Remaining string after slicing: "+ sliced;
//replace

let replace=string.replace("Hello","My");

let rep=document.getElementById("replace").value;
let replaced=document.getElementById("replace").innerHTML=replace;
