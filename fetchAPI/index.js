const URL = "https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector(".fact");
const btn =  document.querySelector("#btn");

// // By async - await
// const getFacts = async() => {
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     fact.innerText = data[0].text;
//     console.log(fact);
// }

// same can be done by promise chaining
function getFacts() {
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=> {
        fact.innerText = data[2].text;
    })
}

btn.addEventListener("click", getFacts);