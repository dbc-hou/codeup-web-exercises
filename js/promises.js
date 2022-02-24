// This has to run via a web page because one cannot log the json data in IntelliJ.

const myAPIData1 = fetch('https://docs.github.com/en/rest/reference/activity#events',
    {headers: {'Authorization': DBC_GITHUB_API_KEY}})
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.log(error));

const myAPIData2 = fetch('https://docs.github.com/en/rest/reference/commits#list-commits',
    {headers: {'Authorization': DBC_GITHUB_API_KEY}})
    .then(response => response.json())
    .catch(error => console.log(error));

console.log(myAPIData1);
console.log(myAPIData2);

function wait(numMS) {
    return new Promise((resolve,reject) => setTimeout(() => {
        resolve("You\'ll see this within " + (numMS/1000) + " second(s)."), numMS;
    }));
}

wait(3000).then(() => {
    console.log(`You'll see this after 3 seconds.`)
});