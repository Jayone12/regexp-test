let str = `
010-1234-5678
dolt1202@gmail.com
https://www.omdbapi.com/
DOlT
abbccdddd
`;


// const regexp = new RegExp('dolt', 'gi')

const h = `  the hello  world   !`

console.log(
 str.match(/(?<=@).{1,}/g)
);