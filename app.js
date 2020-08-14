// Map -Sort -Reduce

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1971, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Age square root
const ageSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * age);

// Create array of company names
const companyNames = companies.map((company) => company.name);

console.log(ageSquare);
console.log(companyNames);

// Sort
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
const sortedAgesInc = ages.sort((a, b) => a - b);
console.log(sortedAgesInc);
const sortedAgesDec = ages.sort((a, b) => b - a);

console.log(sortedCompanies);

console.log(sortedAgesDec);

//reduce
// reduce (callback , initial accumulator value), intial value is optional
// callback basically takes two values (accumulator , currentValue)

console.log(
  "Total Age : " + ages.reduce((totalAge, age) => totalAge + age, 100)
);

const getToatalYears = companies.reduce(
  (totalYears, company) => totalYears + company.end - company.start,
  0
);
console.log("Total years :" + getToatalYears);

// combined methods
// Age multiply by 2 and filter which is greater than 50 and sort it after that add it

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age > 50)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log("Combined : " + combined);
