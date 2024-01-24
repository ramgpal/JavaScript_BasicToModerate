let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// }

btn1.addEventListener("click", ()=> {
    console.log("btn1 was clicked -> Handler1");
})

const handler2 = () => {
    console.log("btn1 was clicked -> Handler2");
}
btn1.addEventListener("click", handler2);


btn1.addEventListener("click", ()=> {
    console.log("btn1 was clicked -> Handler3");
})

btn1.removeEventListener("click", handler2);


let modebtn = document.querySelector("#mode");

let currMode = "light-mode";

modebtn.addEventListener("click", () =>{
    if(currMode == "light-mode") {
        currMode = "dark-mode";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light-mode";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})