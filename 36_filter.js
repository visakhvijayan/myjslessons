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

// Get Middle aged person ,Person age above 40 and less than 60)
console.log(ages.filter((age) => age > 40 && age < 60));

//Getting retail companies list
const retailCompanies = companies.filter(
  (Company) => Company.category === "Retail"
);

// Getting 80's companies list
const eightiesCompanies = companies.filter(
  (Company) => Company.start >= 1980 && Company.start < 1990
);

// Companies lasted 10 years
const lastedTenYears = companies.filter(
  (Company) => Company.end - Company.start > 10
);

console.log(retailCompanies);
console.log(eightiesCompanies);
