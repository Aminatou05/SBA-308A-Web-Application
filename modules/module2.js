// module2.js
// calculateSum function
export function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
// fetch = Function used for making HTTP requests to fetch resources.
// Get all the details about quran such as number of juzs,sajdas, rukus etc in quran
fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
