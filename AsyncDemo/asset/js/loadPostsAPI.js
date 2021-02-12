// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const spinner = document.querySelector("#load")
const blog = document.querySelector(".blogs-container");

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    // load_fromPlaceHolder();
    loadDataNew();
    startTime();
});


//load post from fake api function 
// function load_fromPlaceHolder() {
//      //open the request
//    fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(function(res) {  return res.json(); //return the JSON Promise
//       })
//       .then(function(posts) {
//           //iterate over each post [100 posts]
//           let output = '';
//           posts.forEach(function(post) {
//               output += `<div class="item">
//               <div class="image"> <img src="https://static.toiimg.com/photo/72975551.cms"> </div>
//               <div class="content">
//                     <a class="header" href="#" id="bTitle"> ${posts.title} </a>
                    
                        
//                         <span>By: <a href="#" id="bAuthor"> ${posts.body}</a></span>
                    
                    
//                     <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
//               </div>
//          </div>              `;  // same code as previous with few update
//           });
//           postDiv3.innerHTML = output;
//       })
//       .catch(function(err) {     console.log(err);
//       });

// }
//async await
 async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    return data;


}
function loadDataNew() {
   
    load_fromPlaceHolder_new().then(function(posts) {
        //iterate over each post [100 posts]
        
        let output = '';
        posts.forEach(function(post) {
            output += `
    <div class="item">
    <div class="image">
        <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
    </div>
    <div class="content">
        <a class="header" href="#" id="bTitle">
        ${post.title.toUpperCase()}
        </a>
        <div class="description">
            <p id="bDesc">
            ${post.body}
            </p>
        </div>
        <div class="extra">
            <a class="ui floated basic violet button" href="#">Read Mores</a>
        </div>
    </div>
</div>
`;
        });
        postDiv3.innerHTML = output;
        setTimeout(()=>{
        spinner.classList.add("hide");
        blog.classList.remove("hide");
        },5000)
        
        
    }) .catch(function(err) {
        console.log(err);
    });
   }
       



// UI Variables 
const timerDemo = document.getElementById("timerDemo");
//timer 
function startTime() {
   
   
            //retrieve date 
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        //get the AM / PM value 
        let am_pm = h > 12 ? 'PM' : 'AM';
        // Convert the hour to 12 format 
        h = h % 12 || 12;
        // add zero 
        m = addZero(m);
        s = addZero(s);
        // Assign to the UI [p]
        timerDemo.innerHTML =
         `${h} : ${addZero(m)} : ${addZero(s)} ${am_pm }`;
       //run the timer recursively 
       setTimeout(startTime, 500);
        }
   
    


function addZero(i) {
// add zero in front of numbers < 10
if (i < 10) { i = "0" + i }    return i;

}