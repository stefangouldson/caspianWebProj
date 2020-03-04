//* Client side functions

// console.log("Hello from the client side")

// let usernameTxt = document.getElementById('username')
// let num = document.getElementById('idInput')

// const gettingInfo = async() =>{
//     let response = await fetch(`/info?id=${num.value}`);
//     let data = await response.json()
//     usernameTxt.textContent=data.username
// }

let username = document.getElementById('username-input')

let card = document.getElementById('info-card')

const fetchDetails = async () =>{
    let response = await fetch(`/details?username=${username.value}`)
    let data = await response.json()
    console.table(data)

    let userName = document.createElement('h4')
    userName.innerHTML = "Username: " +data.username
    card.appendChild(userName)

    let firstName = document.createElement('h4')
    firstName.innerHTML = "First Name: " +data.first_name
    card.appendChild(firstName)

    let lastName = document.createElement('h4')
    lastName.innerHTML = "Last Name: " +data.last_name
    card.appendChild(lastName)

    let bal = document.createElement('h4')
    bal.innerHTML = "Balance: " +data.balance
    card.appendChild(bal)

}
