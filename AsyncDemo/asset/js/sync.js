// Sync
let login = function(username, password) {
    setTimeout(() => {

        console.log("Data has Arrived !!!");

        return {
            username,
            password
        }

    }, 2000)
}

console.log("Start of Program !!!");

let user = login("user 1", "password");

//what will be the result ??
console.log(user);

console.log("End of Program !!!");