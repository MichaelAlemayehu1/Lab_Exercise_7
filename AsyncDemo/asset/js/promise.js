// ASync Promise
let login = function(username, password) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve({ username })
            

        }, 2000)

    })

}

//Users Work 
let userWorks = function(username) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(["Android App for Uber", "UI Design for Google", "Web App for Facebook"])

        }, 2000)
    })

}

//Single  Work Detail  
let workDetail = function(work, callback) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(work + " : This Android App was done for Uber by .....")

        }, 2000)
    })

}
console.log("Start of Program !!!");

login("user 1", "password")
    .then(user => userWorks(user.username))
    .then(work => workDetail(work[0]))
   
    .then(workD => { console.log(workD); })



console.log("End of Program !!!");