const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threePlusLangs = users.filter(n => n.languages.length >= 3);
 console.log(threePlusLangs);

let allEmails = users.map(n => n.email);
 console.log(allEmails);

let totalYearsExperience = users.reduce((total,user) => {
    return total + user.yearsOfExperience;
},0);
 console.log(totalYearsExperience);

let averageYearsExperience = totalYearsExperience / users.length
console.log(averageYearsExperience)

let longestEmail = users.reduce((longEmail, user) => {
    if (user.email.length > longEmail.length) {
        return user.email;
    } else {
        return longEmail;
    }
},'');
 console.log(longestEmail);

let listOfUsersNames = users.reduce((concatString,user) => {
    concatString += `${user.name}, `;
    return concatString
},'');
console.log(`Your instructors are: ${listOfUsersNames.substring(0,listOfUsersNames.length - 2)}`);

let uniqueLangList = users.reduce((langString,user) => {
    langString += `${user.languages}`
});

