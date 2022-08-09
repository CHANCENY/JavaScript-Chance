//console.log("high connected");

//forEach
//map
//filter
//sort
//reduce

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// 1. forEach

//takes callback function with illirator, index, entire array
/*companies.forEach(function(company){
    console.log(company);
});*/

//2. filter

//first define variable 

//first way
/*const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
})
console.log(canDrink);

//second way

const ageToDrink = ages.filter(age => age >= 21);
console.log(ageToDrink);*/

/*const retails = companies.filter(function(company){
    if(company.category == "Retail"){
        return true;
    }
});
console.log(retails);

//company parameter can be lap with blackets but it only one no need  eg (company,index)=> ....)
const retailsShortway = companies.filter(company => company.category == "Retail");
console.log(retailsShortway);

//companies started in 80s
const eightescompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
console.log(eightescompanies);

//companies last atleast 10 years

const tenAtleast = companies.filter(company => (company.end - company.start >= 10));
console.log(tenAtleast);*/

// 3. map

// map it create array from another arrays
//can take ill, index, arry
//const comapanyName = companies.map(function(comapny){
 //   return comapny.name;
//})
//console.log(comapanyName);

//const comapanyName = companies.map(com => com.name);
//console.log(comapanyName);

//const egesSquare = ages.map(age => Math.sqrt(age));
//console.log(egesSquare);


//we can also add two maps

//const timesTwo = ages.map(age => age * 2).map(age => age * 4);
//console.log(timesTwo);


// 4. sort

/*const sortByStart = companies.sort(function(c1,c2){
    if(c1.start > c2.start)
    {
        return 1;
    }else{
        return -1;
    }
});

console.log(sortByStart);

//short way

const sortByStartShort = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
console.log(sortByStartShort);

//sort ages l to h

const sortedAges = ages.sort((a,b) => a > b ? 1 : -1);
console.log(sortedAges);*/

//5. reduce

let agesum = 0;
for(let i = 0; i < ages.length; i++){
    
    agesum += ages[i];
}
console.log(agesum);

const ageum = ages.reduce(function(total,age){
   
    return total + age;
}, 0);
console.log(ageum);

const added = ages.reduce((total,age) => total + age, 0);
console.log(added);

const years = companies.reduce((total,comp) => total + (comp.end - comp.start), 0);
console.log(years);





