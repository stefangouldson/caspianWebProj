console.log("Hello from the client side")

let usernameTxt = document.getElementById('username')

const gettingInfo = async() =>{
    let data = await fetch("https//localhost:4000/info");
    let response = await data.json
    document.createElement('p').textContent=response.username
}