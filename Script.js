let statuss = document.querySelector("h5"); 
let text = document.querySelector("h1"); 
let btn = document.querySelector("#add");
let img = document.querySelector("#profile-pic");
let check = 0; // Track the status

btn.addEventListener("click", function () {
    if (check === 0) {
        statuss.innerHTML = "Friends"; 
        statuss.style.color = "green"; 
        text.innerHTML = "Aafiyaman";
        text.style.color = "red";
        btn.innerHTML = "Remove Friend"; 
        img.src = "https://i.pinimg.com/564x/b4/8e/df/b48edfcdb79392af30c57a5b2e267cc6.jpg"; 
        img.style.display = "block"; 
        check = 1;
    } else {
        statuss.innerHTML = "Stranger"; 
        statuss.style.color = "red"; 
        text.innerHTML = "Spider";
        text.style.color = "black";
        btn.innerHTML = "Add Friend"; 
        img.src = "https://i.pinimg.com/564x/39/9d/0d/399d0d0a8bbf14ab1529368f672c3f3a.jpg"; 
        img.style.display = "block"; 
        check = 0;
    }
});
