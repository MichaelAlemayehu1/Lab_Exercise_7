// ASync Callback
let login = function(username, password, callback) {
    setTimeout(() => {

        callback({ username })

    }, 2000)
}

//Users Work 
let userWorks = function(username, callback) {
    setTimeout(() => {

        callback(["Android App for Uber", "UI Design for Google", "Web App for Facebook"])

    }, 2000)
}

//Single  Work Detail  
let workDetail = function(work, callback) {
    setTimeout(() => {

        callback(work + " : This Android App was done for Uber by .....")

    }, 2000)
}
console.log("Start of Program !!!");

login("user 1", "password", (user) => {
    userWorks(user.username, (works) => {

        workDetail(works[0], (workDetail) => {
            console.log(workDetail);
        })


    });
});



console.log("End of Program !!!");